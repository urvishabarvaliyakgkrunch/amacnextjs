// src/components/sections/blog/harvest-2026-data.ts
// Hardcoded copy from amac.ie until WPGraphQL is active (graphql endpoint returns 404)
const UPLOADS = "https://amac.ie/wp-content/uploads/2026/08";

export const HARVEST_TITLE = "Harvest 2026 in East Cork: An Early Finish and a Mixed Picture Across Crops";
export const HARVEST_HERO = `${UPLOADS}/08-combine-harvest.webp`;

export type ArticleBlock =
  | { type: "p"; text: string; image?: { src: string; w: number } }
  | { type: "h2"; text: string };

const img = (name: string, w: number) => ({ src: `${UPLOADS}/${name}-${w}x400.png`, w });

export const HARVEST_BLOCKS: ArticleBlock[] = [
  { type: "p", text: "Harvest 2026 arrived early in East Cork and progressed at a pace few would have expected at the start of the season. Winter barley cutting began around 11 July, while sustained temperatures above 20°C through much of July accelerated ripening across spring crops. In some cases, crops that would normally spend close to six months in the ground reached harvest after only four." },
  { type: "p", text: "The result has been an unusually compressed season. In a typical year, the local spring harvest might only be getting under way around 15 August. This year, much of it was expected to be completed by that point. While the weather created a welcome harvesting window, the picture at the weighbridge was more mixed than crops had suggested from the gate.", image: img("winterbarley", 356) },
  { type: "h2", text: "Winter barley: strong-looking crops, softer yields" },
  { type: "p", text: "Winter barley established well in the autumn and benefited from good grain-filling conditions during May and June. Crops generally looked strong, but yields did not always match their visual promise. Fields that might traditionally have delivered around four tonnes per acre were more commonly returning approximately 3.5 to 3.75 tonnes per acre." },
  { type: "p", text: "The wet spring, rotation and the effects of continuous cereal cropping were all identified as factors that may have limited performance. Straw output was more encouraging. Eight-by-four-by-three bales were producing around seven bales per acre, while four-by-four round bales were yielding approximately 11 to 12 per acre.", image: img("ripeningcrop", 354) },
  { type: "h2", text: "Wheat and oats perform steadily" },
  { type: "p", text: "Winter wheat also came through the wet spring in good condition. Crops remained relatively clean despite the area’s traditionally high septoria pressure, and reported yields ranged from about four to 4.5 tonnes per acre. Growers made use of both baling and straw chopping, depending on their system and participation in the Straw Incorporation Measure." },
  { type: "p", text: "Winter oats followed a similar pattern. Good establishment and grain fill supported yields of up to around four tonnes per acre in some crops. With limited demand for oat straw, a significant proportion was chopped rather than baled.", image: img("cropdevelopment", 350) },
  { type: "h2", text: "Oilseed rape provides a highlight" },
  { type: "p", text: "Oilseed rape was one of the more positive stories of Harvest 2026. Reported yields ranged from approximately 1.5 to two tonnes per acre, alongside an indicative harvest price of €480 to €500 per tonne. Oilseed rape straw was generally chopped, with the crop attracting the lower payment rate available through the Straw Incorporation Measure." },
  { type: "p", text: "Beans were still standing when this update was recorded. They looked fair rather than exceptional, with anticipated yields of two to 2.5 tonnes per acre. Harvesting was expected to begin around 20 August, considerably earlier than the usual mid-to-late September window, with an indicative base price of €220 to €230 per tonne plus any applicable protein-related payment.", image: img("cropinspection", 352) },
  { type: "h2", text: "Harvest moves quickly into autumn planning" },
  { type: "p", text: "As combines finish, attention is already shifting to the next cropping year. Oilseed rape will be among the first autumn crops established, followed by winter barley and winter wheat from around mid-October, subject to local soil and weather conditions." },
  { type: "p", text: "Variety selection will be an important part of those discussions. BYDV-tolerant winter barley varieties are attracting increasing interest, with Orcade and Integral among the examples raised in AMAC’s harvest review. Tolerance should not be confused with full resistance, and drilling date, aphid pressure and crop protection decisions still need to be considered as part of the complete agronomy programme. Farmers should review the options with their agronomist before sowing.", image: img("grass-harvest", 349) },
  { type: "h2", text: "Forage pressure after a dry July" },
  { type: "p", text: "The same weather that accelerated harvest also changed the position on grass farms. A wet spring was followed by excellent growth in May and June, supporting good first-cut silage yields and grazing covers. From early July, however, the prolonged dry spell reduced growth and created fodder pressure on some farms." },
  { type: "p", text: "That may encourage additional winter forage sowing where land, timing and the wider farm plan allow. Forage brassica options such as Gorilla and Mainstar can provide in-situ grazing during winter and into spring, helping to reduce pressure on conserved silage and housing. Suitability, sowing date, grazing infrastructure and animal nutrition all need to be assessed for the individual farm." },
  { type: "h2", text: "Clear markets for grain" },
  { type: "p", text: "AMAC handles grain for three main end uses: animal feed, seed and distilling. Feed grain moves to merchants and millers, while selected winter and spring barley, oat and wheat crops are multiplied through Goldcrop and Seedtech for the following season’s certified seed supply." },
  { type: "p", text: "AMAC also works with Irish Distillers, which purchases a proportion of grain under contract. Grain supplied for distilling must meet agreed quality parameters, with a premium payable to growers when those requirements are achieved. These different outlets underline the importance of planning the crop, variety and intended market together from the outset." },
  { type: "p", text: "Talk to the AMAC team. Harvest 2026 will be remembered for its early finish, favourable cutting conditions and a mixed set of crop results. As autumn decisions begin, the AMAC team is available to discuss seed varieties, crop rotation, fertiliser planning, crop protection, winter forage and grain marketing. Contact AMAC Farm Supplies in Midleton for practical advice tailored to your farm and the season ahead." },
];
