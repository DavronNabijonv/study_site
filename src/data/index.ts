import {
  HomeAncestorImg1,
  HomeAncestorImg2,
  TatuUn,
  TstuUn,
  WebsterUn,
} from "@/assets";
import type { IAncestors, IHomeUniversities, INavbar } from "@/types";
import { v4 as uuidv4 } from "uuid";

/* -------------------------------- Home Page ------------------------------- */
// Navbar
export const NavbarData: INavbar[] = [
  {
    id: uuidv4(),
    title: "aboutUs",
    path: "about",
  },
  {
    id: uuidv4(),
    title: "universities",
    path: "universities",
  },
  {
    id: uuidv4(),
    title: "studentServices",
    path: "student-services",
  },
  {
    id: uuidv4(),
    title: "media",
    path: "media",
  },
  {
    id: uuidv4(),
    title: "apply",
    path: "apply",
  },
];

// Home Ancestors
export const AncestorsData: IAncestors[] = [
  {
    id: uuidv4(),
    name: "Abu Ali Ibn Sino",
    year: "(980-1037)",
    img: HomeAncestorImg1,
  },
  {
    id: uuidv4(),
    name: "Mirzo Ulug’bek",
    year: "(1394-1449)",
    img: HomeAncestorImg2,
  },
  {
    id: uuidv4(),
    name: "Alisher Navoiy",
    year: "(1441-1501)",
    img: HomeAncestorImg2,
  },
  {
    id: uuidv4(),
    name: "Mirzo Ulug’bek",
    year: "(1394-1449)",
    img: HomeAncestorImg2,
  },
  {
    id: uuidv4(),
    name: "Alisher Navoiy",
    year: "(1441-1501)",
    img: HomeAncestorImg2,
  },
  {
    id: uuidv4(),
    name: "Abu Ali Ibn Sino",
    year: "(980-1037)",
    img: HomeAncestorImg1,
  },
];

// Home Universities
export const HomeUnData: IHomeUniversities[] = [
  {
    id: uuidv4(),
    name: "Tashkent State University of Economics",
    img: TstuUn,
  },
  {
    id: uuidv4(),
    name: "Kimyo International University in Tashkent",
    img: TatuUn,
  },
  {
    id: uuidv4(),
    name: "Tashkent Institute of Textile and Light Industry",
    img: WebsterUn,
  },
  {
    id: uuidv4(),
    name: "Kimyo International University in Tashkent",
    img: TatuUn,
  },
  {
    id: uuidv4(),
    name: "Tashkent Institute of Textile and Light Industry",
    img: WebsterUn,
  },
  {
    id: uuidv4(),
    name: "Tashkent State University of Economics",
    img: TstuUn,
  },
];
