import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import Solution from './Solution'

function Homepage() {
  const heroMessages = [
    'homes and the grid',
    'every home',
    'every provider',
    'a sustainable future'
  ]
  const missionText =
    'Energy Tracker is on a mission to reduce global carbon emissions by empowering people and utilities with the knowledge and solutions required to shape a brighter, cleaner future. We deliver real-time intelligence directly through next-generation smart meters and monitoring systems to offer high-resolution insights that improve energy management.'

  const [headlineIndex, setHeadlineIndex] = useState(0)
  const [typedMission, setTypedMission] = useState('')

  useEffect(() => {
    const id = setInterval(() => {
      setHeadlineIndex((prev) => (prev + 1) % heroMessages.length)
    }, 2200)
    return () => clearInterval(id)
  }, [heroMessages.length])

  useEffect(() => {
    let index = 0
    const total = missionText.length
    const id = setInterval(() => {
      setTypedMission(missionText.slice(0, index))
      index = index + 1
      if (index > total) {
        index = 0 // restart the typing loop
      }
    }, 60)

    return () => clearInterval(id)
  }, [missionText])

  return (
    <div className="min-h-screen bg-white">
      
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-[600px] md:h-[700px] overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover blur-[2px]"
        >
          <source src="https://cdn.pixabay.com/video/2022/10/31/137210-766502986_tiny.mp4" type="video/mp4" />
          <source src="https://cdn.pixabay.com/video/2023/05/28/164870-831362503_tiny.mp4" type="video/mp4" />
        </video>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        {/* Content */}
        <div className="relative h-full flex items-center justify-center z-10">
          <div className="text-center px-4 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold font-serif text-white mb-6 leading-tight">
              Energy intelligence for{' '}
              <span className="inline-block transition-opacity text-blue-500 duration-500 ease-in-out">
                {heroMessages[headlineIndex]}
              </span>
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Empowering homeowners and utilities with real-time insights to reduce energy consumption and build a sustainable future.
            </p>
            <div className="flex gap-4 justify-center">
              <Link 
                to="/register" 
                className="px-8 py-3  bg-blue-600 text-white rounded-lg hover:text-white-600 text-lg font-semibold transition"
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

      {/* Role Portals */}
      <div className="bg-white py-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              to="/login"
              className="block bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition"
            >
              <p className="text-sm font-semibold text-green-600 mb-2">Houseowners</p>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Track home energy</h3>
              <p className="text-gray-600 text-sm mb-4">
                View live usage, link devices, and get personalized savings tips.
              </p>
              <span className="text-green-600 font-semibold">Go to Houseowner portal →</span>
            </Link>

            <Link
              to="/login"
              className="block bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition"
            >
              <p className="text-sm font-semibold text-blue-600 mb-2">Providers</p>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Manage recommendations</h3>
              <p className="text-gray-600 text-sm mb-4">
                Send energy-saving plans, track status, and support your customers.
              </p>
              <span className="text-blue-600 font-semibold">Go to Provider portal →</span>
            </Link>

            <Link
              to="/login"
              className="block bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition"
            >
              <p className="text-sm font-semibold text-orange-500 mb-2">Admins</p>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Validate & oversee</h3>
              <p className="text-gray-600 text-sm mb-4">
                Approve users, monitor accounts, and keep data quality high.
              </p>
              <span className="text-orange-500 font-semibold">Go to Admin panel →</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold font-serif text-gray-900 mb-6">
              Changing how we use energy starts with data.
            </h2>
          </div>
          <div>
            <p className="text-lg text-gray-700 leading-relaxed">
              {typedMission || missionText}
            </p>
          </div>
        </div>
      </div>

      {/* Solutions Section */}
      <Solution />
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

      
      <Footer />
    </div>
  )
}

export default Homepage
