import React from "react";
import Layout from "../../Layout/Layout";
import GameDetailsCard from "../../Components/DashboardComponents/GameDetailsCard";
import BarChart from "../../Components/Charts/BarChart";
import DonutChart from "../../Components/Charts/DonutChart";

const Dashboard = () => {
  return (
    <Layout>
      <div className="grid gap-2 p-3 grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3">
        <GameDetailsCard />
        <DonutChart />
        <BarChart />
      </div>
    </Layout>
  );
};

export default Dashboard;
