import { BookOpenCheck, ChartColumnBig, ChartPie, Handshake, ShieldUser, type LucideIcon } from "lucide-react";

export type Module = {
  /** Sorszám a feladatlistában. */
  no: string;
  /** Rövid név a bal sávba. */
  label: string;
  /** A feladat teljes megnevezése. */
  title: string;
  text: string;
  icon: LucideIcon;
};

/** A Gazdasági osztály munkaterületei. Mind fejlesztés alatt áll, ezért egyelőre zárolva vannak. */
export const MODULES: Module[] = [
  {
    no: "01",
    label: "Saját állomány",
    title: "Saját alkalmazottakkal végzett vagyonvédelmi tevékenység elemzése",
    text: "Költségek, órák és fedezet a saját állománnyal ellátott objektumokon.",
    icon: ShieldUser,
  },
  {
    no: "02",
    label: "Alvállalkozók",
    title: "Alvállalkozóval végzett vagyonvédelmi tevékenység elemzése",
    text: "Alvállalkozói díjak, teljesítés és árrés összevetése.",
    icon: Handshake,
  },
  {
    no: "03",
    label: "Havi eredmény",
    title: "Havi eredmény elemzése, kimutatások készítése",
    text: "Havi bevétel–költség–eredmény, összevetés az előző időszakokkal.",
    icon: ChartColumnBig,
  },
  {
    no: "04",
    label: "Főkönyvi karton",
    title: "Főkönyvi karton elemzése",
    text: "Főkönyvi tételek átvizsgálása, eltérések és rendellenességek kiszűrése.",
    icon: BookOpenCheck,
  },
  {
    no: "05",
    label: "KSH statisztikák",
    title: "KSH statisztikák készítésében való segítség",
    text: "Az adatszolgáltatásokhoz szükséges számok előkészítése egy helyen.",
    icon: ChartPie,
  },
];
