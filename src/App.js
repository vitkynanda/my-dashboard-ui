import React from "react";
import TablePage from "./pages/Table";
import { Routes, Route, Navigate } from "react-router-dom";
import DashboardPage from "./pages/Dashboard";

const App = () => {
  return (
    <Routes>
      <Route path="/table" element={<TablePage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/" element={<Navigate to="/dashboard" />} />
    </Routes>
  );
};

export default App;
