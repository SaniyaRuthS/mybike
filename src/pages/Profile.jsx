import React from 'react'
import { useBike } from '../context/BikeContext'

export default function Profile() {
  const { bike } = useBike()

  return (
    <section className="card">
      <h2 className="section-title">Owner Profile</h2>
      <div className="profile-container">
        <div className="profile-photo">
          <img
            src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
            alt="Owner"
          />
        </div>

        <div className="profile-info">
          <h3>{bike.ownerName}</h3>
          <p><strong>Email:</strong> {bike.ownerEmail}</p>
          <p><strong>Phone:</strong> {bike.ownerPhone}</p>
          <p><strong>Bike Model:</strong> {bike.bikeModel}</p>
          <p><strong>Registration Number:</strong> {bike.bikeNumber}</p>
          <p><strong>Year:</strong> {bike.bikeYear}</p>
          <p><strong>Total Km Run:</strong> {bike.totalKmRun} km</p>
          <p><strong>Average Speed:</strong> {bike.averageSpeedKmph} km/h</p>
          <p><strong>Mileage:</strong> {bike.mileageKmPerLitre} km/l</p>
          <p><strong>Next Service Date:</strong> {bike.nextServiceDate}</p>
        </div>
      </div>
    </section>
  )
}
