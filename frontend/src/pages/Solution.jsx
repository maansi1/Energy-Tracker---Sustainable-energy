import { Link } from 'react-router-dom'
import { useState } from 'react'
function Solution() {
    const [openSolution, setOpenSolution] = useState('utilities')
    return (
        
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
                  <span className="text-xl font-semibold text-gray-900">For Providers</span>
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
                      className="inline-block px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-400 transition"
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
                  <span className="text-xl font-semibold text-gray-900">For Admins</span>
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
                    <div className="text-2xl mb-2">
                        <img src="https://images.unsplash.com/vector-1739805925343-a75152047bf3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG91c2V8ZW58MHx8MHx8fDA%3D" alt="" />
                    </div>
                    <div className="text-xs text-gray-600">Homes</div>
                  </div>
                  <div className="bg-blue-100 rounded-lg p-4 text-center">
                    <div className="text-2xl mb-2">
                        <img src="https://plus.unsplash.com/premium_vector-1719419318644-42b0cd4440af?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c29sYXJ8ZW58MHx8MHx8fDA%3D" alt="" />
                    </div>
                    <div className="text-xs text-gray-600">Solar</div>
                  </div>
                  <div className="bg-orange-100 rounded-lg p-4 text-center">
                    <div className="text-2xl mb-2">
                        <img src="https://plus.unsplash.com/premium_vector-1716429407660-e1c816bc59a0?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZXZ8ZW58MHx8MHx8fDA%3D" alt="" />
                    </div>
                    <div className="text-xs text-gray-600"></div>
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
                      <div className="h-2 bg-orange-400 rounded" style={{ width: '75%' }}></div>
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

    )
}

export default Solution