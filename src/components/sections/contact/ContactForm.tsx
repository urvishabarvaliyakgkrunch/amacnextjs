// src/components/sections/contact/ContactForm.tsx
"use client";

import { useState, type FormEvent } from "react";
import { DEPARTMENTS } from "./contact-data";

const FIELD = "h-[52px] w-full rounded-[25px] border border-[#ddd] bg-transparent px-4 text-[13px] text-black focus:border-primary focus:outline-none";
const LABEL = "mb-1.5 block text-sm leading-5 font-medium text-black";

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

  // WPForms endpoint is not confirmed yet (rule P4) — wire the real submit in lib/forms.ts when it is
  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPending(true);
    setTimeout(() => setPending(false), 0);
  }

  return (
    <form onSubmit={onSubmit} className="rounded-[10px] bg-white p-5 shadow-[0_0_20px_0_rgba(0,0,0,0.08)] sm:p-8">
      <h3 className="mb-9 text-[28px] leading-9 font-bold text-primary">Send Us a Message</h3>
      <div className="grid grid-cols-1 gap-x-4 gap-y-5 sm:grid-cols-2">
        <Field id="name" label="Your name" />
        <Field id="email" label="Your email" type="email" required />
        <Field id="subject" label="Subject" />
        <Field id="phone" label="Phone number" type="tel" defaultValue="+353" />
        <div className="sm:col-span-2">
          <label htmlFor="department" className={LABEL}>Select department</label>
          <select id="department" name="department" className={`${FIELD} appearance-none`}>
            {DEPARTMENTS.map((d) => (
              <option key={d}>{d}</option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className={LABEL}>Message</label>
          <textarea id="message" name="message" rows={4} className={`${FIELD} h-[120px] rounded-[25px] py-3`} />
        </div>
      </div>
      <button
        type="submit"
        disabled={pending}
        className="mt-6 cursor-pointer rounded-[50px] px-[32px] py-3.5 text-base leading-6 font-bold text-white shadow-[var(--shadow-button)] transition-all duration-400 [background:var(--gradient-primary)] hover:[background:var(--gradient-black)] disabled:opacity-60"
      >
        {pending ? "Sending…" : "Submit"}
      </button>
    </form>
  );
}
