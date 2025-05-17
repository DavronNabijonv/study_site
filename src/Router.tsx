import { createBrowserRouter } from "react-router-dom";
import NavigatePage from "./middlewares/NavigatePage";
import ChekLang from "./lib/CheckLang";
import MainLayout from "./layouts/MainLayout";
import { AboutUz, Home } from "./app";
import About_us from "./app/about-us/about-us";

// This is staging branch

export const routes = createBrowserRouter([
  {
    path: "",
    element: <NavigatePage />,
  },
  {
    path: ":lang",
    element: <ChekLang />,
    children: [
      {
        path: "",
        element: <MainLayout />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: "about-uz",
            element: <AboutUz />,
          },
          {
            path: "about-us",
            element: <About_us />,
          },
          {
            path: "universities",
            element: "Univercities Page",
          },
          {
            path: "student-services",
            element: "Student Services Page",
          },
          {
            path: "media",
            element: "Media Page",
          },
          {
            path: "apply",
            element: "Apply Page",
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <h2>Page not found</h2>,
  },
]);
