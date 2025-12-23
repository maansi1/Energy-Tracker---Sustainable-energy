import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Homepage from './Homepage'
import Login from './Login'
import Register from './Register'
import UserDashboard from './UserDashboard'
import AdminPanel from './AdminPanel'
import ProviderDashboard from './ProviderDashboard'
import EnergyReports from './EnergyReports'
import Services from './Services'
import Contact from './Contact'
function Home(){
    return(
        <Router>
      <Routes>
     
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<UserDashboard />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/provider" element={<ProviderDashboard />} />
        <Route path="/reports" element={<EnergyReports />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>

    )
}

export default Home;