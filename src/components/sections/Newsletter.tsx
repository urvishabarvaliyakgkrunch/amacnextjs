// src/components/sections/Newsletter.tsx
"use client";

import Image from "next/image";
import { useState, type FormEvent } from "react";

type NewsletterProps = {
  title?: string;
  subtitle?: string;
};

export default function Newsletter({
  title = "Keep up to date with AMAC",
  subtitle = "Sign up for our newsletter and receive new product notifications.",
}: NewsletterProps) {
  const [pending, setPending] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPending(true);
    setStatus("idle");

    const form = event.currentTarget;
    const email = new FormData(form).get("email");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
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
    <section className="px-4 py-10 sm:px-6 md:py-[60px] lg:px-0 lg:py-[78px]">
      <div className="relative mx-auto max-w-[1420px] overflow-hidden rounded-[36px]">
        <Image
          src="https://amac.ie/wp-content/uploads/2026/07/container.webp"
          alt=""
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 1420px, 100vw"
        />
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "var(--color-primary)", opacity: 0.79 }}
        />

        <div className="relative flex flex-col items-center gap-2.5 px-4 py-10 text-center sm:px-6 md:pt-[90px] md:pb-20">
          <h2 className="text-white">{title}</h2>
          {subtitle &&
            <p className="max-w-[700px] text-base leading-[26.4px] text-white">{subtitle}</p>
          }

          <form
            onSubmit={onSubmit}
            className="mt-8 flex w-full max-w-[380px] items-center justify-between gap-2 rounded-[50px] border border-white bg-white/[0.28] py-[3px] pr-[3px] pl-5 md:mt-[50px] mb-[24px]"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              name="email"
              type="email"
              required
              placeholder="Enter your email address"
              className="h-6 min-w-0 flex-1 border-0 bg-transparent p-0 text-base text-white placeholder:text-white focus:outline-none"
            />
            <button
              type="submit"
              disabled={pending}
              className="h-12 min-w-[141px] shrink-0 rounded-[30px] border border-white bg-white px-6 text-base font-bold text-[color:var(--color-primary)] transition-colors hover:bg-primary uppercase hover:text-white disabled:opacity-60"
            >
              {pending ? "Sending…" : "Subscribe"}
            </button>
          </form>
          {status === "success" ? <p className="text-sm font-semibold text-white">Subscribed! Thanks for joining.</p> : null}
          {status === "error" ? <p className="text-sm font-semibold text-red-200">Something went wrong. Please try again.</p> : null}
        </div>
      </div>
    </section>
  );
}
