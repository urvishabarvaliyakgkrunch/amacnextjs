// src/components/sections/Newsletter.tsx
import Image from "next/image";

export default function Newsletter() {
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
          <h2 className="text-white">Keep up to date with AMAC</h2>
          <p className="max-w-[700px] text-base leading-[26.4px] text-white">
            Sign up for our newsletter and receive new product notifications.
          </p>

          <form className="mt-8 flex w-full max-w-md flex-col min-[480px]:flex-row min-[480px]:items-center min-[480px]:justify-between min-[480px]:rounded-[50px] min-[480px]:border min-[480px]:border-white min-[480px]:bg-white/[0.28] min-[480px]:px-5 min-[480px]:py-[15px] md:mt-[58px]">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              placeholder="Enter your email address"
              className="w-full flex-1 rounded-[30px] border border-white bg-white/[0.28] px-5 text-white placeholder:text-white/70 focus:outline-none min-[480px]:border-0 min-[480px]:bg-transparent min-[480px]:px-0"
              style={{ height: 56 }}
            />
            <button
              type="submit"
              className="mt-3 w-full shrink-0 rounded-[30px] bg-white px-6 py-[14px] text-base font-bold text-[color:var(--color-primary)] transition-colors hover:bg-[color:var(--color-bg-alt)] min-[480px]:mt-0 min-[480px]:w-auto min-[480px]:rounded-full"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
