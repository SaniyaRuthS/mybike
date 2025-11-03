import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Profile from './pages/Profile'

// ✅ Import your CSS file here — this is what applies the dashboard styles
import './styles.css'

// ✅ Import the BikeProvider context
import { BikeProvider } from './context/BikeContext'

// ✅ Render everything
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Wrap everything inside BikeProvider so all components can access context */}
    <BikeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </BikeProvider>
  </React.StrictMode>
)
