import React from "react";
import { BikeProvider } from "./context/BikeContext";
import Layout from "./components/Layout";
import DashboardCards from "./components/DashboardCards";
import ServiceReminders from "./components/ServiceReminders";
import OwnerProfile from "./components/OwnerProfile";
import BikeHealthDetails from "./components/BikeHealthDetails";

export default function App() {
  return (
    <BikeProvider>
      <Layout>
        <div className="page">
          <DashboardCards />
          <BikeHealthDetails />
          <ServiceReminders />
          <OwnerProfile />
        </div>
      </Layout>
    </BikeProvider>
  );
}
