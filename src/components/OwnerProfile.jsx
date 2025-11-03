import React from "react";
import { useBike } from "../context/BikeContext";

export default function OwnerProfile() {
  const { bikeData } = useBike();
  const { owner } = bikeData;

  return (
    <section className="section">
      <h2 className="section-title">Owner & Bike Profile</h2>
      <div className="card card-horizontal">
        <div className="avatar-circle">
          {owner.name
            .split(" ")
            .map((n) => n[0])
            .join("")
            .toUpperCase()}
        </div>
        <div>
          <h3 className="owner-title">{owner.name}</h3>
          <p className="owner-subtitle">{owner.email}</p>
          <p className="owner-subtitle">{owner.phone}</p>

          <div className="owner-bike-details">
            <div>
              <span className="badge">Bike Number</span>
              <span className="badge-value">{owner.bikeNumber}</span>
            </div>
            <div>
              <span className="badge">Model</span>
              <span className="badge-value">{owner.bikeModel}</span>
            </div>
            <div>
              <span className="badge">Purchased</span>
              <span className="badge-value">{owner.yearOfPurchase}</span>
            </div>
          </div>

          <p className="card-description">
            You can connect this profile to login / signup, cloud sync, and
            multiple bikes in the future.
          </p>
        </div>
      </div>
    </section>
  );
}
