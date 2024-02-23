import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import MainRoutes from "./routes/MainRoutes";
import { BrowserRouter } from "react-router-dom";
import ProductContext from "./context/ProductContext";
import AuthContext from "./context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContext>
    <ProductContext>
      <BrowserRouter>
        <App />
        <MainRoutes />
      </BrowserRouter>
    </ProductContext>
  </AuthContext>
);
