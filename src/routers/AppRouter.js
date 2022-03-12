import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import { LoginScreen } from "../components/login/LoginScreen";

import { DashboardRouter } from "./DashboardRouter";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rutas públicas: */}
        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginScreen />
            </PublicRoute>
          }
        />

        {/* Rutas privadas: */}
        <Route
          path="/*"
          element={
            <PrivateRoute>
              <DashboardRouter />
            </PrivateRoute>
          }
        />
        {/* <Route path="/*" element={<DashboardRouter />} /> */}
      </Routes>
    </BrowserRouter>
  );
};
