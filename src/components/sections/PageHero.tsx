// src/components/sections/PageHero.tsx
import Image from "next/image";

type PageHeroProps = {
  title: string;
  subtitle?: string | string[];
  image: string;
  // Category archives on live use a flat dark-green tint instead of the gradient
  solidOverlay?: boolean;
};

export default function PageHero({ title, subtitle, image, solidOverlay }: PageHeroProps) {
  return (
    <section className="relative flex min-h-[400px] items-center justify-center overflow-hidden lg:min-h-[490px]">
      <Image
        src={image}
        alt=""
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div
        className="absolute inset-0"
        style={
          solidOverlay
            ? { backgroundColor: "rgba(32,39,18,.45)" }
            : { backgroundImage: "linear-gradient(180deg, #000000 0%, #466b20 100%)", opacity: 0.4 }
        }
      />
      <div className="relative mx-auto flex max-w-[1680px] flex-col items-center px-4 pt-[100px] pb-0 text-center sm:px-6 md:pb-[50px] lg:px-20">
        <h1 className="text-white">{title}</h1>
        {subtitle ? (
          <div className="mt-4 max-w-[700px] space-y-4 font-semibold text-white">
            {(Array.isArray(subtitle) ? subtitle : [subtitle]).map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
