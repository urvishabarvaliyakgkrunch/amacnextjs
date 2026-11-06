type WPFormsFields = Record<string, string>;

type WPFormsSuccess = { success: true; entry_id: number };

export class WPFormsError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.status = status;
  }
}

export async function submitToWPForms(formId: string, fields: WPFormsFields): Promise<WPFormsSuccess> {
  const bridgeUrl = process.env.WPFORMS_BRIDGE_URL;
  const secret = process.env.WPFORMS_BRIDGE_SECRET;

  if (!bridgeUrl || !secret) {
    throw new WPFormsError("WPForms bridge is not configured.", 500);
  }

  const response = await fetch(bridgeUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-amac-secret": secret,
    },
    body: JSON.stringify({ form_id: formId, fields }),
  });

  const data = await response.json().catch(() => null);

  if (!response.ok) {
    const message = data?.message || "Failed to submit form.";
    throw new WPFormsError(message, response.status);
  }

  return data as WPFormsSuccess;
}
