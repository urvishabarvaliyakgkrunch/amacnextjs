<?php
/**
 * Plugin Name: AMAC WPForms Bridge
 * Description: REST endpoint that lets the headless Next.js site submit into a WPForms form (entries + notifications) without exposing admin-ajax/nonce.
 * Version: 1.0.0
 * Author: AMAC
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

define( 'AMAC_BRIDGE_SECRET', 'REPLACE_WITH_A_LONG_RANDOM_SECRET' );

add_action( 'rest_api_init', function () {
	register_rest_route(
		'amac/v1',
		'/contact',
		[
			'methods'             => 'POST',
			'callback'            => 'amac_wpforms_bridge_handle',
			'permission_callback' => 'amac_wpforms_bridge_auth',
			'args'                => [
				'form_id' => [ 'required' => true ],
				'fields'  => [ 'required' => true ],
			],
		]
	);
} );

function amac_wpforms_bridge_auth( WP_REST_Request $request ) {

	$provided = $request->get_header( 'x-amac-secret' );

	if ( ! $provided || ! hash_equals( AMAC_BRIDGE_SECRET, $provided ) ) {
		return new WP_Error( 'forbidden', 'Invalid or missing secret.', [ 'status' => 403 ] );
	}

	return true;
}

/**
 * Expects JSON body:
 * {
 *   "form_id": 123,
 *   "fields": { "1": "John Doe", "2": "john@example.com", "3": "Subject", "4": "Message text" }
 * }
 * Field IDs (1,2,3,4...) come from the WPForms form builder — hover a field to see its ID,
 * or check the field's "Smart Tag" (e.g. {field_id="2"}).
 */
function amac_wpforms_bridge_handle( WP_REST_Request $request ) {

	if ( ! function_exists( 'wpforms' ) ) {
		return new WP_Error( 'wpforms_missing', 'WPForms is not active.', [ 'status' => 500 ] );
	}

	$form_id = absint( $request->get_param( 'form_id' ) );
	$fields  = (array) $request->get_param( 'fields' );

	if ( ! $form_id || empty( $fields ) ) {
		return new WP_Error( 'bad_request', 'form_id and fields are required.', [ 'status' => 400 ] );
	}

	$form = wpforms()->obj( 'form' )->get( $form_id );

	if ( ! $form || $form->post_status !== 'publish' ) {
		return new WP_Error( 'invalid_form', 'Form not found or not published.', [ 'status' => 404 ] );
	}

	$sanitized_fields = [];

	foreach ( $fields as $field_id => $value ) {
		$sanitized_fields[ absint( $field_id ) ] = is_array( $value )
			? array_map( 'sanitize_text_field', $value )
			: sanitize_textarea_field( (string) $value );
	}

	$entry = [
		'id'     => $form_id,
		'fields' => $sanitized_fields,
	];

	// Mirror what WPForms itself expects to find in $_POST during its internal checks.
	$_POST['wpforms'] = $entry;

	wpforms()->process->process( $entry );

	$errors = wpforms()->process->errors[ $form_id ] ?? [];

	if ( ! empty( $errors ) ) {
		return new WP_Error( 'validation_failed', wp_strip_all_tags( $errors['header'] ?? 'Validation failed.' ), [ 'status' => 422 ] );
	}

	return new WP_REST_Response(
		[
			'success'  => true,
			'entry_id' => wpforms()->process->entry_id,
		],
		200
	);
}
