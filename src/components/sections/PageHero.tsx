// src/components/sections/PageHero.tsx
import Image from "next/image";
import Link from "next/link";

type PageHeroProps = {
  title: string;
  subtitle?: string | string[];
  image: string;
  // Category archives on live use a flat dark-green tint instead of the gradient
  solidOverlay?: boolean;
  // Inline link appended to the subtitle (live: "View delivery areas")
  link?: { label: string; href: string };
  // Product sub-pages: live hero is 530px below the top bar, content centred under a 140px header gap
  tall?: boolean;
  // Blog posts: live keeps h1 at 40/50px below 1367px and starts it 120px under the hero top on mobile
  post?: boolean;
};

export default function PageHero({ title, subtitle, image, solidOverlay, link, tall, post }: PageHeroProps) {
  return (
    <section
      className={`relative flex min-h-[400px] items-center justify-center overflow-hidden ${
        post ? "items-center" : "pt-[70px] pb-[50px] md:py-0"
      } ${
        tall ? "lg:min-h-[570px] lg:pt-[140px]" : post ? "min-[1025px]:min-h-[490px]" : "lg:min-h-[490px]"
      }`}
    >
      <Image
        src={image}
        alt=""
        fill
        priority
        className="object-cover object-[bottom_center]"
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
      <div className={`relative mx-auto flex max-w-[1680px] flex-col items-center px-4 pt-[118px] pb-0 text-center sm:px-6 md:pb-[50px] lg:px-20 ${tall ? "lg:py-0" : ""} ${post ? "max-md:pt-[120px]" : ""}`}>
        <h1 className={`text-white ${post ? "text-[34px] leading-[38px] min-[768px]:max-[1200px]:text-[50px] min-[768px]:max-[1200px]:leading-[55px] min-[1201px]:text-[58px] min-[1201px]:leading-[63.8px]" : "text-[34px] md:text-[40px]"}`}>{title}</h1>
        {subtitle ? (
          <div className="mt-[33px] flex max-w-[700px] flex-col gap-[13.6px] font-semibold leading-[26.4px] text-white">
            {(Array.isArray(subtitle) ? subtitle : [subtitle]).map((line) => (
              <p key={line}>
                {line}
                {link ? (
                  <>
                    {" "}
                    <Link href={link.href} className="underline">
                      {link.label}
                    </Link>
                  </>
                ) : null}
              </p>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
