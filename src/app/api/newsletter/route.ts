import { NextRequest, NextResponse } from "next/server";
import { submitToWPForms, WPFormsError } from "@/lib/wpforms";

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);

  if (!body || typeof body.email !== "string" || !body.email) {
    return NextResponse.json({ error: "Email is required." }, { status: 400 });
  }

  const formId = process.env.WPFORMS_NEWSLETTER_FORM_ID;
  const emailFieldId = process.env.WPFORMS_NEWSLETTER_FIELD_EMAIL;

  if (!formId || !emailFieldId) {
    return NextResponse.json({ error: "Newsletter form is not configured." }, { status: 500 });
  }

  try {
    const result = await submitToWPForms(formId, { [emailFieldId]: body.email });
    return NextResponse.json(result);
  } catch (error) {
    if (error instanceof WPFormsError) {
      return NextResponse.json({ error: error.message }, { status: error.status });
    }

    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }
}
