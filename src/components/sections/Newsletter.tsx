// src/components/sections/Newsletter.tsx
import Image from "next/image";

export default function Newsletter() {
  return (
    <section className="px-4 py-10 sm:px-6 md:py-[78px] lg:px-0">
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

        <div className="relative flex flex-col items-center px-4 py-10 text-center sm:px-6 md:py-20">
          <h2 className="text-white">Keep up to date with AMAC</h2>
          <p className="mt-3 max-w-[700px] text-white">
            Sign up for our newsletter and receive new product notifications.
          </p>

          <form className="mt-8 flex w-full max-w-md flex-col gap-3 sm:flex-row">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              placeholder="Enter your email address"
              className="w-full flex-1 rounded-full border-0 px-5 py-3 text-[color:var(--color-ink)] placeholder:text-[color:var(--color-muted)] focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button
              type="submit"
              className="rounded-full bg-white px-7 py-3 text-sm font-semibold uppercase tracking-[0.04em] text-[color:var(--color-ink-dark)] transition-colors hover:bg-[color:var(--color-bg-alt)]"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
