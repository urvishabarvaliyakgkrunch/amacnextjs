// src/components/sections/contact/ContactForm.tsx
"use client";

import { useState, type FormEvent } from "react";
import { DEPARTMENTS } from "./contact-data";

const FIELD = "h-[52px] w-full rounded-[25px] border border-[#ddd] bg-white px-5 text-base text-black focus:border-primary focus:outline-none";
const LABEL = "mb-2.5 block text-base leading-[19px] font-semibold text-black/85";

function Field({ id, label, required, ...rest }: { id: string; label: string; required?: boolean } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label htmlFor={id} className={LABEL}>
        {label}
        {required ? <span className="text-red-600"> *</span> : null}
      </label>
      <input id={id} name={id} required={required} className={FIELD} {...rest} />
    </div>
  );
}

export default function ContactForm() {
  const [pending, setPending] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPending(true);
    setStatus("idle");

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          subject: data.get("subject"),
          phone: data.get("phone"),
          department: data.get("department"),
          message: data.get("message"),
        }),
      });

      if (!response.ok) throw new Error();

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    } finally {
      setPending(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="rounded-lg bg-white p-5 shadow-[0px_4px_16px_0px_rgba(26,26,26,0.17)] sm:p-10">
      <h3 className="mb-8 text-[32px] leading-[44.8px] font-bold text-primary">Send Us a Message</h3>
      <div className="grid grid-cols-1 gap-x-4 gap-y-5 sm:grid-cols-2">
        <Field id="name" label="Your name" />
        <Field id="email" label="Your email" type="email" required />
        <Field id="subject" label="Subject" />
        <Field id="phone" label="Phone number" type="tel" defaultValue="+353" />
        <div className="sm:col-span-2">
          <label htmlFor="department" className={LABEL}>Select department</label>
          <select id="department" name="department" className={`${FIELD} appearance-none pl-[14px]`}>
            {DEPARTMENTS.map((d) => (
              <option key={d}>{d}</option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className={LABEL}>Message</label>
          <textarea id="message" name="message" rows={4} className={`${FIELD} h-[120px] rounded-[25px] py-4`} />
        </div>
      </div>
      <button
        type="submit"
        disabled={pending}
        className="mt-6 cursor-pointer rounded-[50px] px-10 py-4 text-base leading-6 font-semibold text-white shadow-[var(--shadow-button)] transition-all duration-400 [background:var(--gradient-primary)] hover:[background:var(--gradient-black)] disabled:opacity-60"
      >
        {pending ? "Sending…" : "Submit"}
      </button>
      {status === "success" ? (
        <p className="mt-4 text-sm font-semibold text-green-700">Thanks! Your message has been sent.</p>
      ) : null}
      {status === "error" ? (
        <p className="mt-4 text-sm font-semibold text-red-600">Something went wrong. Please try again.</p>
      ) : null}
    </form>
  );
}
