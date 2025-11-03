import React, { createContext, useContext, useState } from "react";

const BikeContext = createContext();

const initialBikeState = {
  owner: {
    name: "Demo User",
    email: "demo@example.com",
    phone: "+91-9876543210",
    bikeNumber: "TN-00-AB-1234",
    bikeModel: "Demo Bike 150cc",
    yearOfPurchase: 2024,
  },
  metrics: {
    totalKmRun: 12500,      // odometer
    tripDistanceKm: 36.4,   // last trip / today distance
    averageSpeedKmph: 42,   // computed from ride data
    mileageKmPerLitre: 42,  // fuel efficiency
  },
  health: {
    engineHealth: "Good",
    batteryHealth: "Good",
    tyreHealth: "Moderate",
    brakeHealth: "Good",
    overallHealthScore: 82, // 0 - 100
  },
  maintenance: {
    lastServiceKm: 11000,
    serviceIntervalKm: 3000,
    lastOilChangeKm: 11000,
    oilChangeIntervalKm: 3000,
    nextServiceDate: "2025-12-20",
  },
};

function calculateKmToNextService(totalKmRun, lastServiceKm, serviceIntervalKm) {
  const nextServiceKm = lastServiceKm + serviceIntervalKm;
  return Math.max(0, nextServiceKm - totalKmRun);
}

function isOilChangeDue(totalKmRun, lastOilChangeKm, oilChangeIntervalKm) {
  return totalKmRun - lastOilChangeKm >= oilChangeIntervalKm;
}

export function BikeProvider({ children }) {
  const [bikeData, setBikeData] = useState(initialBikeState);

  const kmToNextService = calculateKmToNextService(
    bikeData.metrics.totalKmRun,
    bikeData.maintenance.lastServiceKm,
    bikeData.maintenance.serviceIntervalKm
  );

  const oilChangeDue = isOilChangeDue(
    bikeData.metrics.totalKmRun,
    bikeData.maintenance.lastOilChangeKm,
    bikeData.maintenance.oilChangeIntervalKm
  );

  const value = {
    bikeData,
    setBikeData,
    kmToNextService,
    oilChangeDue,
  };

  return <BikeContext.Provider value={value}>{children}</BikeContext.Provider>;
}

export function useBike() {
  const ctx = useContext(BikeContext);
  if (!ctx) {
    throw new Error("useBike must be used inside BikeProvider");
  }
  return ctx;
}
