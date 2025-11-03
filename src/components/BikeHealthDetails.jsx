import React from "react";
import { useBike } from "../context/BikeContext";

export default function BikeHealthDetails() {
  const { bikeData } = useBike();
  const { health } = bikeData;

  return (
    <section className="section">
      <h2 className="section-title">Detailed Bike Health</h2>
      <div className="card">
        <div className="health-row">
          <span>Engine</span>
          <span>{health.engineHealth}</span>
        </div>
        <div className="health-row">
          <span>Battery</span>
          <span>{health.batteryHealth}</span>
        </div>
        <div className="health-row">
          <span>Tyres</span>
          <span>{health.tyreHealth}</span>
        </div>
        <div className="health-row">
          <span>Brakes</span>
          <span>{health.brakeHealth}</span>
        </div>
        <div className="health-row">
          <span>Overall Score</span>
          <span>{health.overallHealthScore}/100</span>
        </div>

        <p className="card-description">
          This section is a placeholder to plug in data from sensors / OBD
          device / mobile app inputs. You can map engine temperature,
          battery voltage, tyre pressure, etc. here.
        </p>
      </div>
    </section>
  );
}
