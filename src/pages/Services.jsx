import { Link } from 'react-router-dom'
import { useState } from 'react'

function Services() {
  const [locationFilter, setLocationFilter] = useState('')
  const [sustainabilityFilter, setSustainabilityFilter] = useState('all')

  const services = [
    {
      id: 1,
      name: 'Solar Panel Installation',
      provider: 'Green Energy Solutions',
      location: 'New York, NY',
      sustainability: 'high',
      rating: 4.8,
      price: '$5,000 - $15,000',
      description: 'Professional solar panel installation with 25-year warranty'
    },
    {
      id: 2,
      name: 'Smart Thermostat Setup',
      provider: 'EcoTech Services',
      location: 'Los Angeles, CA',
      sustainability: 'high',
      rating: 4.6,
      price: '$200 - $500',
      description: 'Install and configure smart thermostats to reduce energy costs'
    },
    {
      id: 3,
      name: 'LED Lighting Upgrade',
      provider: 'Bright Future Energy',
      location: 'Chicago, IL',
      sustainability: 'medium',
      rating: 4.5,
      price: '$100 - $300',
      description: 'Replace all bulbs with energy-efficient LED lighting'
    },
    {
      id: 4,
      name: 'Energy Audit',
      provider: 'Energy Experts Inc',
      location: 'New York, NY',
      sustainability: 'high',
      rating: 4.9,
      price: '$150 - $400',
      description: 'Comprehensive home energy audit with detailed recommendations'
    },
    {
      id: 5,
      name: 'HVAC System Upgrade',
      provider: 'Climate Control Pro',
      location: 'Miami, FL',
      sustainability: 'medium',
      rating: 4.7,
      price: '$3,000 - $8,000',
      description: 'Upgrade to energy-efficient heating and cooling systems'
    },
    {
      id: 6,
      name: 'Insulation Improvement',
      provider: 'Home Efficiency Plus',
      location: 'Seattle, WA',
      sustainability: 'high',
      rating: 4.4,
      price: '$1,000 - $3,000',
      description: 'Improve home insulation to reduce heating and cooling costs'
    }
  ]

  const filteredServices = services.filter(service => {
    const matchesLocation = !locationFilter || 
      service.location.toLowerCase().includes(locationFilter.toLowerCase())
    const matchesSustainability = sustainabilityFilter === 'all' || 
      service.sustainability === sustainabilityFilter
    return matchesLocation && matchesSustainability
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-2xl font-bold text-green-600">⚡ Energy Tracker</h1>
            <div className="flex gap-4 items-center">
              <Link to="/dashboard" className="text-gray-700 hover:text-green-600">
                Dashboard
              </Link>
              <Link to="/reports" className="text-gray-700 hover:text-green-600">
                Reports
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
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Energy Services</h2>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h3 className="text-lg font-semibold mb-4">Filter Services</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Filter by Location
              </label>
              <input
                type="text"
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
                placeholder="Enter city or state..."
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Sustainability Level
              </label>
              <select
                value={sustainabilityFilter}
                onChange={(e) => setSustainabilityFilter(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
              >
                <option value="all">All Levels</option>
                <option value="high">High Sustainability</option>
                <option value="medium">Medium Sustainability</option>
                <option value="low">Low Sustainability</option>
              </select>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map(service => (
            <div key={service.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-semibold text-gray-900">{service.name}</h3>
                <span className={`px-2 py-1 rounded text-xs font-semibold ${
                  service.sustainability === 'high' ? 'bg-green-100 text-green-800' :
                  service.sustainability === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {service.sustainability}
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-2">by {service.provider}</p>
              <p className="text-sm text-gray-500 mb-3">📍 {service.location}</p>
              <p className="text-gray-700 mb-4">{service.description}</p>
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                  <span className="text-yellow-500">★</span>
                  <span className="ml-1 text-sm font-semibold">{service.rating}</span>
                </div>
                <span className="text-lg font-bold text-green-600">{service.price}</span>
              </div>
              <button className="w-full px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
                View Details
              </button>
            </div>
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-12 bg-white rounded-lg shadow-md">
            <p className="text-gray-600 text-lg">No services found matching your filters.</p>
            <button
              onClick={() => {
                setLocationFilter('')
                setSustainabilityFilter('all')
              }}
              className="mt-4 px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Services

