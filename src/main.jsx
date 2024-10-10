import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

import FloatingGivingButton from "./components/FloatingGivingButton";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ScrollBehavior from "./components/ScrollBehavior";
import AboutPage from "./pages/AboutPage";
import Arise2023Page from "./pages/Arise2023Page";
import HomePage from "./pages/HomePage";
import MovementsPage from "./pages/MovementsPage";
import NotFoundPage from "./pages/NotFoundPage";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <ScrollBehavior />
        <Navbar />
        <HelmetProvider>
          <Outlet />
        </HelmetProvider>
        <Footer />
        <FloatingGivingButton />
        <Analytics />
        <SpeedInsights />
      </>
    ),
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "movements",
        element: <MovementsPage />,
      },
      { path: "arise2023", element: <Arise2023Page /> },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
