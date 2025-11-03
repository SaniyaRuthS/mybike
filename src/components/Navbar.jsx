import React from 'react'
import { useBike } from '../context/BikeContext'

function Navbar() {
  // Safely extract bike from context
  const context = useBike()
  const bike = context?.bike

  // If context or bike not loaded yet, show fallback UI
  if (!bike) {
    return (
      <header className="navbar">
        <h1 className="navbar-title">Bike Health Monitor</h1>
        <span className="nav-loading">Loading...</span>
      </header>
    )
  }

  return (
    <header className="navbar">
      <div className="navbar-left">
        <span className="logo-dot" />
        <h1 className="navbar-title">Bike Health Monitor</h1>
      </div>

      <div className="navbar-right">
        <a href="/" className="nav-link">Dashboard</a>
        <a href="/profile" className="nav-link">Profile</a>

        <div className="navbar-bike-info">
          <span className="navbar-bike-model">{bike.bikeModel}</span>
          <span className="navbar-bike-number">{bike.bikeNumber}</span>
        </div>

        <div className="navbar-owner">
          <span className="owner-name">{bike.ownerName}</span>
        </div>
      </div>
    </header>
  )
}

export default Navbar
