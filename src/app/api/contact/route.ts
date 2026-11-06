import { NextRequest, NextResponse } from "next/server";
import { submitToWPForms, WPFormsError } from "@/lib/wpforms";

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);

  if (!body || typeof body.email !== "string" || !body.email) {
    return NextResponse.json({ error: "Email is required." }, { status: 400 });
  }

  const formId = process.env.WPFORMS_CONTACT_FORM_ID;

  if (!formId) {
    return NextResponse.json({ error: "Contact form is not configured." }, { status: 500 });
  }

  const fields: Record<string, string> = {};

  if (process.env.WPFORMS_CONTACT_FIELD_NAME) fields[process.env.WPFORMS_CONTACT_FIELD_NAME] = body.name ?? "";
  if (process.env.WPFORMS_CONTACT_FIELD_EMAIL) fields[process.env.WPFORMS_CONTACT_FIELD_EMAIL] = body.email;
  if (process.env.WPFORMS_CONTACT_FIELD_SUBJECT) fields[process.env.WPFORMS_CONTACT_FIELD_SUBJECT] = body.subject ?? "";
  if (process.env.WPFORMS_CONTACT_FIELD_PHONE) fields[process.env.WPFORMS_CONTACT_FIELD_PHONE] = body.phone ?? "";
  if (process.env.WPFORMS_CONTACT_FIELD_DEPARTMENT) fields[process.env.WPFORMS_CONTACT_FIELD_DEPARTMENT] = body.department ?? "";
  if (process.env.WPFORMS_CONTACT_FIELD_MESSAGE) fields[process.env.WPFORMS_CONTACT_FIELD_MESSAGE] = body.message ?? "";

  try {
    const result = await submitToWPForms(formId, fields);
    return NextResponse.json(result);
  } catch (error) {
    if (error instanceof WPFormsError) {
      return NextResponse.json({ error: error.message }, { status: error.status });
    }

    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }
}
