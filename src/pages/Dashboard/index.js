import React from "react";
import DashboardLayout from "../../components/Layout/DashboardLayout";
import MainLayout from "../../components/Layout/MainLayout";
import Dashboard from "../../components/PageUI/Dashboard";

const DashboardPage = () => {
  return (
    <MainLayout>
      <DashboardLayout title="Simple Dashobard">
        <Dashboard />
      </DashboardLayout>
    </MainLayout>
  );
};

export default DashboardPage;
