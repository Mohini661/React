import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/css/style.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Products from "./components/Products.jsx";
import Shop from "./components/Shop.jsx";
import Contact from "./components/Contact.jsx";
import Featured from "./components/Featured.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Products /> },
      { path: "/shop", element: <Shop /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
