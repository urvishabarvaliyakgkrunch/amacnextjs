// src/components/sections/team/team-data.ts
const UPLOADS = "https://amac.ie/wp-content/uploads/2026/07";

export type TeamProfile = {
  name: string;
  role: string;
  phone: string;
  email: string;
  coverage: string;
  bio: string; // line breaks mirror the live WP copy
  image: string;
};

export type TeamMember = {
  name: string;
  role: string;
  image: string;
};

export const TEAM_PROFILES: TeamProfile[] = [
  {
    name: "Aidan Murphy",
    role: "Director - Sales (Agri Sales)",
    phone: "086 245 1253",
    email: "aidan@amac.ie",
    coverage: "Cork, Waterford, Limerick, Tipperary",
    bio: `Aidan
Murphy is one of the company directors of AMAC Farm Supplies. He, along with Richard
McCarthy, began the business in 2006. Aidan brings an excellent understanding of crop
agronomy and ruminant nutrition, and gives excellent advice towards improving crop health and
animal performance.`,
    image: `${UPLOADS}/Aidan-Murphy-scaled-e1784269581468-1.webp`,
  },
  {
    name: "Richard McCarthy",
    role: "Director - Sales (Agri Sales)",
    phone: "086 812 4928",
    email: "richard@amac.ie",
    coverage: "East Cork, North Cork, West Waterford",
    bio: `Richard McCarthy is one of the company directors of AMAC Farm Supplies. He, along with Aidan
Murphy, began the business in 2006. Coming from a dairy background, Richard has a keen
interest in the agri sector. He works closely across animal nutrition, grassland agronomy and the
solid fuel side of the business.`,
    image: `${UPLOADS}/Richard-McCarthy-scaled-1.webp`,
  },
  {
    name: "Stephen Gumbleton B.Agr.Sc",
    role: "Sales",
    phone: "086 011 1759",
    email: "stephen@amac.ie",
    coverage: "West Waterford, Cork",
    bio: "Stephen, a dairy farmer, joined AMAC in 2018. Prior to this, he had six years of experience in the agri industry. Graduating with an Animal and Crop Production degree from UCD, Stephen brings an in-depth understanding of crop agronomy and animal nutrition to the business.",
    image: `${UPLOADS}/Stephen-Gumbleton-scaled-1.webp`,
  },
  {
    name: "Bobby McCarthy B.Agr.Sc",
    role: "Sales",
    phone: "086 248 4040",
    email: "bobby@amac.ie",
    coverage: "East Cork, North Cork",
    bio: "Bobby, a son of Richard, completed a Bachelor of Science degree in Agriculture from SETU Waterford. Bobby joined the company on completion of his degree in 2019. He has a keen interest in crop agronomy and animal nutrition, and enjoys sport, particularly hurling, in his spare time.",
    image: `${UPLOADS}/Bobby-McCarthy-scaled-1.webp`,
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  { name: "Ann Maria Russell", role: "Accounts", image: `${UPLOADS}/Annmarie-Cronin.webp` },
  { name: "Grace O’Keeffe", role: "Administration", image: `${UPLOADS}/Grace-OKeeffe.webp` },
  { name: "Seamus Murphy", role: "General Operative", image: `${UPLOADS}/Seamus-Murphy.webp` },
  { name: "Adrian Hickey", role: "Lorry Driver", image: `${UPLOADS}/Adrian-Hickey.webp` },
  { name: "Liam McLellan", role: "General Operative", image: `${UPLOADS}/Liam-McLellan.webp` },
  { name: "Josh Kelleher", role: "Lorry Driver", image: `${UPLOADS}/Josh-Kelleher.webp` },
  { name: "Ross Bulman", role: "General Operative", image: `${UPLOADS}/Ross-Bulman.webp` },
];
