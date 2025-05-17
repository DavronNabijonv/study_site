export type Language = "uz" | "ru" | "en";

/* -------------------------------- Home Page ------------------------------- */
// Navbar
export interface INavbar {
  id: string;
  title: "aboutUs" | "universities" | "studentServices" | "media" | "apply";
  path: string;
}

// Home Ancestors
export interface IAncestors {
  id: string;
  name: string;
  year: string;
  img: string;
}

// Home Universities
export interface IHomeUniversities {
  id: string;
  name: string;
  img: string;
}