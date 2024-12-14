import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import About from "./About";
import Body from "./Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./Contact";
import Projects from "./Projects";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
    ],
  },
]);
const root = createRoot(document.querySelector("#root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);
