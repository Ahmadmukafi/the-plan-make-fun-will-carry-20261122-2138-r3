import { writeFileSync, mkdirSync } from "node:fs";

const plan = "Day 1: $15 'Landlord Toolkit' — 12 templates: late-rent notice, move-out list. Buyers: landlords, 1–10 units, on r/landlord + BiggerPockets; 2 free, DM 20/day. Likely 30 sales by day 30: 30×$15=$450, keep $380. $100: $40 ads. Edge: landlords pay to avoid eviction court.";

const out = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(out, { recursive: true });
writeFileSync(`${out}/entry.txt`, plan, "utf8");
