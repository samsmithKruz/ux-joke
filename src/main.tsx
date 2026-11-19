import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import "./index.css";

import RegisterPage from "@/pages/register";
import AppPage from "@/pages/app";
import SecurityPage from "@/pages/settings/security";
import CheckoutPage from "./pages/checkout";
import CheckoutDeletePage from "./pages/checkout-delete";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/register" replace />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/app" element={<AppPage />} />
        <Route path="/settings/security" element={<SecurityPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/checkout-delete" element={<CheckoutDeletePage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);