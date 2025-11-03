import React from "react";
import { useBike } from "../context/BikeContext";

export default function DashboardCards() {
  const { bikeData } = useBike();
  const { metrics, health } = bikeData;

  const cards = [
    {
      label: "Total Km Run",
      value: `${metrics.totalKmRun.toLocaleString()} km`,
      description: "Overall distance covered by the bike",
    },
    {
      label: "Distance Travelled (Trip)",
      value: `${metrics.tripDistanceKm.toFixed(1)} km`,
      description: "Recent ride / today’s distance",
    },
    {
      label: "Average Speed",
      value: `${metrics.averageSpeedKmph} km/h`,

      description: "Based on recent ride data",
    },
    {
      label: "Mileage",
      value: `${metrics.mileageKmPerLitre} km/l`,
      description: "Approx. fuel efficiency",
    },
    {
      label: "Bike Health",
      value: `${health.overallHealthScore}/100`,
      description: "Overall health score",
    },
  ];

  return (
    <section className="section">
      <h2 className="section-title">Ride & Performance Overview</h2>
      <div className="grid">
        {cards.map((card) => (
          <div className="card" key={card.label}>
            <div className="card-label">{card.label}</div>
            <div className="card-value">{card.value}</div>
            <p className="card-description">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
