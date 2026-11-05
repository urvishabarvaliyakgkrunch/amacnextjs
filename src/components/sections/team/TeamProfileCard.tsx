// src/components/sections/team/TeamProfileCard.tsx
import Image from "next/image";
import type { TeamProfile } from "./team-data";

const PhoneIcon = () => (
  <svg viewBox="0 0 512 512" className="size-[18px] fill-secondary" aria-hidden="true">
    <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z" />
  </svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 512 512" className="size-[18px] fill-secondary" aria-hidden="true">
    <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z" />
  </svg>
);

// Director/sales card: photo left (40%), contact details + bio right — stacks on mobile like the live site
export default function TeamProfileCard({ name, role, phone, email, coverage, bio, image }: TeamProfile) {
  return (
    <article className="flex flex-col overflow-hidden rounded-[10px] border border-border md:flex-row">
      <div className="relative min-h-[350px] w-full md:w-2/5 md:shrink-0">
        <Image src={image} alt={name} fill className="object-cover object-top" sizes="(min-width: 1024px) 330px, (min-width: 768px) 40vw, 100vw" />
      </div>

      <div className="flex flex-col gap-2.5 py-5 pr-5 pl-5 leading-[1.65] md:pl-[30px]">
        <h3 className="text-xl leading-[22px] font-bold text-secondary">{name}</h3>
        <p className="text-base leading-4 font-bold text-primary">{role}</p>
        <span className="block h-[3px] w-[35px] bg-lime" aria-hidden="true" />

        <ul className="text-secondary">
          <li className="pb-[2.5px]">
            <a href={`tel:${phone.replace(/\s/g, "")}`} className="flex items-center hover:text-primary">
              <PhoneIcon />
              <span className="pl-[5px]">{phone}</span>
            </a>
          </li>
          <li className="pb-[2.5px]">
            <a href={`mailto:${email}`} className="flex items-center hover:text-primary">
              <MailIcon />
              <span className="pl-[5px]">{email}</span>
            </a>
          </li>
          <li>
            <b>Coverage:</b> {coverage}
          </li>
        </ul>

        <span className="my-[5px] block h-px w-full bg-primary/42" aria-hidden="true" />
        <p className="mb-[27px] whitespace-pre-line text-ink">{bio}</p>
      </div>
    </article>
  );
}
