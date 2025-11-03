import React from "react";
import { useBike } from "../context/BikeContext";

export default function ServiceReminders() {
  const { bikeData, kmToNextService, oilChangeDue } = useBike();
  const { maintenance, metrics } = bikeData;

  return (
    <section className="section">
      <h2 className="section-title">Service & Maintenance</h2>
      <div className="grid">
        <div className="card">
          <div className="card-label">Next Service</div>
          <div className="card-value">
            {kmToNextService === 0
              ? "Service Due Now"
              : `${kmToNextService} km remaining`}
          </div>
          <p className="card-description">
            Last service at {maintenance.lastServiceKm} km. Interval of{" "}
            {maintenance.serviceIntervalKm} km.
          </p>
          <p className="card-extra">
            Planned date: {maintenance.nextServiceDate || "Not set"}
          </p>
        </div>

        <div className="card">
          <div className="card-label">Oil Change</div>
          <div className={`card-value ${oilChangeDue ? "text-warning" : ""}`}>
            {oilChangeDue ? "Oil Change Due" : "Oil Level OK"}
          </div>
          <p className="card-description">
            Last oil change at {maintenance.lastOilChangeKm} km. Interval of{" "}
            {maintenance.oilChangeIntervalKm} km.
          </p>
          <p className="card-extra">
            Current Odometer: {metrics.totalKmRun.toLocaleString()} km
          </p>
        </div>

        <div className="card">
          <div className="card-label">Quick Notes</div>
          <p className="card-description">
            You can extend this boilerplate to store service history, upload
            bills, and track spares replaced.
          </p>
          <ul className="card-list">
            <li>✅ Regular service reminder</li>
            <li>✅ Oil change indication</li>
            <li>🛠️ Tyre / brake check tracking (TODO)</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
