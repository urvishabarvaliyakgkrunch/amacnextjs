// src/components/products/ProductCard.tsx
import Image from "next/image";
import Link from "next/link";

type ProductCardProps = {
  title: string;
  description: string;
  image: string;
  href: string;
};

export default function ProductCard({ title, description, image, href }: ProductCardProps) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-lg gap-[10px] border border-[color:var(--color-card-border)] bg-[color:var(--color-card-bg)]">
      <div className="relative h-[260px] w-full overflow-hidden">
        <Image
          src={image}
          alt=""
          fill
          className="object-cover transition-transform duration-300 hover:scale-110"
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
        />
      </div>
      <div className="flex flex-col gap-2.5 p-[15px]">
        <h3 className="text-xl leading-6 font-bold text-[color:var(--color-secondary)]">{title}</h3>
        <p className="text-base my-[.85em] leading-[26.4px] text-[color:var(--color-muted)]">{description}</p>
        <Link
          href={href}
          className="mt-1 inline-flex items-center gap-2.5 text-base text-[color:var(--color-accent)]"
        >
          Learn more
          <svg
            width="17"
            height="12"
            viewBox="0 0 17 12"
            fill="none"
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:-rotate-[30deg]"
          >
            <path
              d="M16.28 5.46 11.03.21a.75.75 0 0 0-1.06 1.06l3.97 3.97H.75a.75.75 0 0 0 0 1.5h13.19l-3.97 3.97a.75.75 0 1 0 1.06 1.06l5.25-5.25a.75.75 0 0 0 0-1.06Z"
              fill="currentColor"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
