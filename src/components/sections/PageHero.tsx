// src/components/sections/PageHero.tsx
import Image from "next/image";

type PageHeroProps = {
  title: string;
  subtitle?: string;
  image: string;
};

export default function PageHero({ title, subtitle, image }: PageHeroProps) {
  return (
    <section className="relative flex min-h-[400px] items-center justify-center overflow-hidden lg:min-h-[450px]">
      <Image
        src={image}
        alt=""
        fill
        priority
        className="object-cover object-bottom"
        sizes="100vw"
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(180deg, #000000 0%, var(--color-primary) 100%)",
          opacity: 0.4,
        }}
      />
      <div className="relative mx-auto flex max-w-[1680px] flex-col items-center px-4 pt-[90px] pb-0 text-center sm:px-6 md:pb-[50px] lg:px-20">
        <h1 className="text-white">{title}</h1>
        {subtitle ? (
          <p className="mt-4 max-w-[700px] text-sm font-semibold text-white md:text-base">
            {subtitle}
          </p>
        ) : null}
      </div>
    </section>
  );
}
