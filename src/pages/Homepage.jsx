import { Link } from 'react-router-dom'
import { useState } from 'react'

function Homepage() {
  const [openSolution, setOpenSolution] = useState('utilities')

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">⚡</span>
                </div>
                <h1 className="text-2xl font-semibold text-gray-900">energy tracker</h1>
              </div>
            </div>
            <div className="hidden md:flex gap-8 items-center">
              <Link to="/dashboard" className="text-gray-700 hover:text-green-600 font-medium">
                For Homes
              </Link>
              <Link to="/provider" className="text-gray-700 hover:text-green-600 font-medium">
                For Utilities
              </Link>
              <Link to="/services" className="text-gray-700 hover:text-green-600 font-medium">
                For Partners
              </Link>
              <Link 
                to="/login" 
                className="px-4 py-2 text-gray-700 hover:text-green-600 font-medium"
              >
                Login
              </Link>
              <Link 
                to="/register" 
                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 font-medium"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-[600px] md:h-[700px] overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://cdn.pixabay.com/video/2022/10/31/137210-766502986_tiny.mp4" type="video/mp4" />
          <source src="https://cdn.pixabay.com/video/2023/05/28/164870-831362503_tiny.mp4" type="video/mp4" />
        </video>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        {/* Content */}
        <div className="relative h-full flex items-center justify-center z-10">
          <div className="text-center px-4 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Energy intelligence for homes and the grid
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Empowering homeowners and utilities with real-time insights to reduce energy consumption and build a sustainable future.
            </p>
            <div className="flex gap-4 justify-center">
              <Link 
                to="/register" 
                className="px-8 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 text-lg font-semibold transition"
              >
                Get Started
              </Link>
              <Link 
                to="/login" 
                className="px-8 py-3 bg-white text-gray-900 rounded-lg hover:bg-gray-100 text-lg font-semibold transition"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Changing how we use energy starts with data.
            </h2>
          </div>
          <div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Energy Tracker is on a mission to reduce global carbon emissions by empowering people and utilities with the knowledge and solutions required to shape a brighter, cleaner future. We deliver real-time intelligence directly through next-generation smart meters and monitoring systems to offer high-resolution insights that improve energy management.
            </p>
          </div>
        </div>
      </div>

      {/* Solutions Section */}
      <div className="bg-[#f5f3f0] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Side - Solutions */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Solutions for Everyone</h2>
              
              {/* For Utilities */}
              <div className="mb-4 bg-white rounded-lg shadow-sm overflow-hidden">
                <button
                  onClick={() => setOpenSolution(openSolution === 'utilities' ? '' : 'utilities')}
                  className="w-full px-6 py-4 flex justify-between items-center text-left hover:bg-gray-50 transition"
                >
                  <span className="text-xl font-semibold text-gray-900">For Utilities</span>
                  <span className="text-gray-500">{openSolution === 'utilities' ? '−' : '+'}</span>
                </button>
                {openSolution === 'utilities' && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-700 mb-4">
                      Energy Tracker strengthens grid reliability, delivers real-time visibility, and helps accelerate the energy transition. Our platform provides utilities with comprehensive data analytics and demand management tools.
                    </p>
                    <Link 
                      to="/provider"
                      className="inline-block px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition"
                    >
                      Learn more
                    </Link>
                  </div>
                )}
              </div>

              {/* For Homes */}
              <div className="mb-4 bg-white rounded-lg shadow-sm overflow-hidden">
                <button
                  onClick={() => setOpenSolution(openSolution === 'homes' ? '' : 'homes')}
                  className="w-full px-6 py-4 flex justify-between items-center text-left hover:bg-gray-50 transition"
                >
                  <span className="text-xl font-semibold text-gray-900">For Homes</span>
                  <span className="text-gray-500">{openSolution === 'homes' ? '−' : '+'}</span>
                </button>
                {openSolution === 'homes' && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-700 mb-4">
                      Track your home energy consumption in real-time, receive personalized recommendations, and reduce your carbon footprint while saving money on energy bills.
                    </p>
                    <Link 
                      to="/dashboard"
                      className="inline-block px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition"
                    >
                      Learn more
                    </Link>
                  </div>
                )}
              </div>

              {/* For Partners */}
              <div className="mb-4 bg-white rounded-lg shadow-sm overflow-hidden">
                <button
                  onClick={() => setOpenSolution(openSolution === 'partners' ? '' : 'partners')}
                  className="w-full px-6 py-4 flex justify-between items-center text-left hover:bg-gray-50 transition"
                >
                  <span className="text-xl font-semibold text-gray-900">For Partners</span>
                  <span className="text-gray-500">{openSolution === 'partners' ? '−' : '+'}</span>
                </button>
                {openSolution === 'partners' && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-700 mb-4">
                      Partner with us to offer energy-saving solutions to your customers. Join our network of certified energy service providers and expand your reach.
                    </p>
                    <Link 
                      to="/services"
                      className="inline-block px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition"
                    >
                      Learn more
                    </Link>
                  </div>
                )}
              </div>
            </div>

            {/* Right Side - Graphics */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="mb-6">
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="bg-green-100 rounded-lg p-4 text-center">
                    <div className="text-2xl mb-2">🏠</div>
                    <div className="text-xs text-gray-600">Homes</div>
                  </div>
                  <div className="bg-blue-100 rounded-lg p-4 text-center">
                    <div className="text-2xl mb-2">☀️</div>
                    <div className="text-xs text-gray-600">Solar</div>
                  </div>
                  <div className="bg-orange-100 rounded-lg p-4 text-center">
                    <div className="text-2xl mb-2">🔌</div>
                    <div className="text-xs text-gray-600">EV</div>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-2 mb-4">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <div className="flex-1 h-0.5 bg-green-500"></div>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <div className="flex-1 h-0.5 bg-blue-500"></div>
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                </div>
              </div>
              <div className="border-t pt-6">
                <h3 className="text-sm font-semibold text-gray-700 mb-3">Energy Usage</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-600">2:00 PM</span>
                    <div className="flex-1 mx-2">
                      <div className="h-2 bg-green-500 rounded" style={{ width: '75%' }}></div>
                    </div>
                    <span className="text-xs font-semibold">48.4 kWh</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-600">4:00 PM</span>
                    <div className="flex-1 mx-2">
                      <div className="h-2 bg-green-400 rounded" style={{ width: '60%' }}></div>
                    </div>
                    <span className="text-xs font-semibold">38.2 kWh</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-600">6:00 PM</span>
                    <div className="flex-1 mx-2">
                      <div className="h-2 bg-green-300 rounded" style={{ width: '25%' }}></div>
                    </div>
                    <span className="text-xs font-semibold">12.54 kWh</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Impact Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Impact</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-green-600 mb-4">4-8%</div>
              <p className="text-lg text-gray-700 font-medium">Average Annual Energy Savings</p>
              <p className="text-sm text-gray-500 mt-2">Users save significantly on their energy bills</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-orange-500 mb-4">3x</div>
              <p className="text-lg text-gray-700 font-medium">Demand Savings Compared To Leading Behavioral Programs</p>
              <p className="text-sm text-gray-500 mt-2">More effective than traditional approaches</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-4">30x</div>
              <p className="text-lg text-gray-700 font-medium">User Engagement Compared To Utility Customer Portals</p>
              <p className="text-sm text-gray-500 mt-2">Higher interaction and satisfaction rates</p>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="bg-[#f5f3f0] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Energy Tracker is making the energy transition accessible for everyone.
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Founded with a vision to reduce carbon emissions, Energy Tracker provides comprehensive home energy monitoring and management solutions. Today, we're dedicated to empowering consumers and utilities to create a dynamic and resilient energy ecosystem that benefits everyone.
              </p>
              <Link 
                to="/register"
                className="inline-block px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition font-semibold"
              >
                About Us
              </Link>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-sm mx-auto">
              <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-lg p-6 mb-4">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-sm text-gray-600">Today's Savings</p>
                    <p className="text-2xl font-bold text-green-600">$2.00</p>
                  </div>
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-2xl">✓</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Energy Used</span>
                    <span className="font-semibold">125 kWh</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Savings</span>
                    <span className="font-semibold text-green-600">+15%</span>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <p className="text-xs text-gray-500">Energy Tracker Mobile App</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">⚡</span>
                </div>
                <h3 className="text-xl font-semibold">energy tracker</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Empowering homes and utilities with energy intelligence.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/dashboard" className="hover:text-white">For Homes</Link></li>
                <li><Link to="/provider" className="hover:text-white">For Utilities</Link></li>
                <li><Link to="/services" className="hover:text-white">For Partners</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/" className="hover:text-white">About</Link></li>
                <li><Link to="/reports" className="hover:text-white">Reports</Link></li>
                <li><Link to="/services" className="hover:text-white">Services</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Get Started</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/register" className="hover:text-white">Sign Up</Link></li>
                <li><Link to="/login" className="hover:text-white">Login</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 Energy Tracker. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Homepage
