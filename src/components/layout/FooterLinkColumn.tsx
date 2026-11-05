// src/components/layout/FooterLinkColumn.tsx
import Link from "next/link";

type FooterLinkColumnProps = {
  title: string;
  links: { label: string; href: string }[];
};

export default function FooterLinkColumn({ title, links }: FooterLinkColumnProps) {
  return (
    <div>
      <h3 className="border-b border-[color:var(--color-primary-dark)] pb-3 text-lg font-semibold text-white">
        {title}
      </h3>
      <ul className="mt-4 flex flex-col gap-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link href={link.href} className="text-white/90 hover:text-white">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
