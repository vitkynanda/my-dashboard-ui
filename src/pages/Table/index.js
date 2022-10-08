import React from "react";
import DataTable from "../../components/DataTable";
import DashboardLayout from "../../components/Layout/DashboardLayout";
import MainLayout from "../../components/Layout/MainLayout";

const TablePage = () => {
  return (
    <MainLayout>
      <DashboardLayout title="Table Example">
        <DataTable />
      </DashboardLayout>
    </MainLayout>
  );
};

export default TablePage;
