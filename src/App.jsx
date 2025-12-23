import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Login from './pages/Login'
import Register from './pages/Register'
import UserDashboard from './pages/UserDashboard'
import AdminPanel from './pages/AdminPanel'
import ProviderDashboard from './pages/ProviderDashboard'
import EnergyReports from './pages/EnergyReports'
import Services from './pages/Services'
import Navbar from './pages/Navbar'
function App() {
  return (
    <Router>
      <Routes>
      <Route path="/navbar" element={<Navbar />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<UserDashboard />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/provider" element={<ProviderDashboard />} />
        <Route path="/reports" element={<EnergyReports />} />
        <Route path="/services" element={<Services />} />
        
      </Routes>
    </Router>
  )
}

export default App

