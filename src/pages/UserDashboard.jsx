import { Link } from 'react-router-dom'
import { useState } from 'react'

function UserDashboard() {
  const [energyData, setEnergyData] = useState({
    currentUsage: 1250,
    monthlyUsage: 37500,
    lastMonthUsage: 42000,
    savings: 4500
  })

  const [linkedDevices, setLinkedDevices] = useState([
    { id: 1, name: 'Smart Meter - Main', status: 'Active', usage: 850 },
    { id: 2, name: 'Solar Panel System', status: 'Active', usage: -200 }
  ])

  const handleLinkDevice = () => {
    const deviceName = prompt('Enter device name:')
    if (deviceName) {
      setLinkedDevices([
        ...linkedDevices,
        { 
          id: linkedDevices.length + 1, 
          name: deviceName, 
          status: 'Pending', 
          usage: 0 
        }
      ])
    }
  }

  const percentageChange = ((energyData.monthlyUsage - energyData.lastMonthUsage) / energyData.lastMonthUsage * 100).toFixed(1)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-2xl font-bold text-green-600">⚡ Energy Tracker</h1>
            <div className="flex gap-4 items-center">
              <Link to="/reports" className="text-gray-700 hover:text-green-600">
                Reports
              </Link>
              <Link to="/services" className="text-gray-700 hover:text-green-600">
                Services
              </Link>
              <span className="text-gray-700">John Doe</span>
              <Link to="/" className="text-gray-700 hover:text-green-600">
                Logout
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Dashboard</h2>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-600 text-sm mb-2">Current Usage (kWh)</p>
            <p className="text-3xl font-bold text-gray-900">{energyData.currentUsage}</p>
            <p className="text-sm text-green-600 mt-2">Today</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-600 text-sm mb-2">Monthly Usage (kWh)</p>
            <p className="text-3xl font-bold text-gray-900">{energyData.monthlyUsage.toLocaleString()}</p>
            <p className={`text-sm mt-2 ${percentageChange < 0 ? 'text-green-600' : 'text-red-600'}`}>
              {percentageChange}% vs last month
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-600 text-sm mb-2">Savings (kWh)</p>
            <p className="text-3xl font-bold text-green-600">{energyData.savings.toLocaleString()}</p>
            <p className="text-sm text-gray-600 mt-2">This month</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-600 text-sm mb-2">Status</p>
            <p className="text-3xl font-bold text-green-600">✓ Active</p>
            <p className="text-sm text-gray-600 mt-2">Account verified</p>
          </div>
        </div>

        {/* Linked Devices */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold">Linked Energy Devices</h3>
            <button
              onClick={handleLinkDevice}
              className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
            >
              + Link Device
            </button>
          </div>
          <div className="space-y-4">
            {linkedDevices.map(device => (
              <div key={device.id} className="border border-gray-200 rounded-lg p-4 flex justify-between items-center">
                <div>
                  <p className="font-semibold">{device.name}</p>
                  <p className="text-sm text-gray-600">Status: {device.status}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-lg">
                    {device.usage > 0 ? '+' : ''}{device.usage} kWh
                  </p>
                  <p className="text-sm text-gray-600">Current</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <Link
                to="/reports"
                className="block w-full px-4 py-3 bg-green-50 text-green-700 rounded-md hover:bg-green-100 text-center"
              >
                View Energy Reports
              </Link>
              <Link
                to="/services"
                className="block w-full px-4 py-3 bg-blue-50 text-blue-700 rounded-md hover:bg-blue-100 text-center"
              >
                Browse Energy Services
              </Link>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">Recent Recommendations</h3>
            <div className="space-y-3">
              <div className="border-l-4 border-green-500 pl-4">
                <p className="font-semibold">Switch to LED bulbs</p>
                <p className="text-sm text-gray-600">Save up to 80% on lighting costs</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <p className="font-semibold">Install smart thermostat</p>
                <p className="text-sm text-gray-600">Reduce heating/cooling by 15%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserDashboard

