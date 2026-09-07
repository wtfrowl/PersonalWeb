import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Navigate, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import App from "./App.jsx";
import NotFound from "./components/notfound.jsx";

// The site is one scrollable scrapbook now. Old routes keep working by
// jumping to the section they used to be.
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />} />
      <Route path="/work" element={<Navigate to="/#projects" replace />} />
      <Route path="/skills" element={<Navigate to="/#inventory" replace />} />
      <Route path="/experience" element={<Navigate to="/#story" replace />} />
      <Route path="/contact" element={<Navigate to="/#contact" replace />} />
      <Route path="/chill" element={<Navigate to="/#quests" replace />} />
      <Route path="*" element={<NotFound />} />
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
