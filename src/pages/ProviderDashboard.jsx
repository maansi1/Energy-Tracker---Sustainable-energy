import { Link } from 'react-router-dom'
import { useState } from 'react'

function ProviderDashboard() {
  const [recommendations, setRecommendations] = useState([
    { id: 1, user: 'John Doe', recommendation: 'Install solar panels to reduce grid dependency', status: 'Pending' },
    { id: 2, user: 'Jane Smith', recommendation: 'Upgrade to energy-efficient HVAC system', status: 'Sent' },
  ])

  const [newRecommendation, setNewRecommendation] = useState({
    userId: '',
    message: ''
  })

  const handleAddRecommendation = () => {
    if (newRecommendation.userId && newRecommendation.message) {
      setRecommendations([
        ...recommendations,
        {
          id: recommendations.length + 1,
          user: newRecommendation.userId,
          recommendation: newRecommendation.message,
          status: 'Pending'
        }
      ])
      setNewRecommendation({ userId: '', message: '' })
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-2xl font-bold text-green-600">⚡ Energy Tracker - Provider</h1>
            <div className="flex gap-4 items-center">
              <span className="text-gray-700">Energy Solutions Inc</span>
              <Link to="/" className="text-gray-700 hover:text-green-600">
                Logout
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Provider Dashboard</h2>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-600 text-sm mb-2">Total Recommendations</p>
            <p className="text-3xl font-bold text-gray-900">{recommendations.length}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-600 text-sm mb-2">Pending</p>
            <p className="text-3xl font-bold text-yellow-600">
              {recommendations.filter(r => r.status === 'Pending').length}
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-600 text-sm mb-2">Sent</p>
            <p className="text-3xl font-bold text-green-600">
              {recommendations.filter(r => r.status === 'Sent').length}
            </p>
          </div>
        </div>

        {/* Add Recommendation */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h3 className="text-xl font-semibold mb-4">Add New Recommendation</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                User ID / Name
              </label>
              <input
                type="text"
                value={newRecommendation.userId}
                onChange={(e) => setNewRecommendation({ ...newRecommendation, userId: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
                placeholder="Enter user name or ID"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Recommendation
              </label>
              <textarea
                value={newRecommendation.message}
                onChange={(e) => setNewRecommendation({ ...newRecommendation, message: e.target.value })}
                rows="4"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
                placeholder="Enter your energy-saving recommendation..."
              />
            </div>
            <button
              onClick={handleAddRecommendation}
              className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
            >
              Add Recommendation
            </button>
          </div>
        </div>

        {/* Recommendations List */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4">Your Recommendations</h3>
          <div className="space-y-4">
            {recommendations.map(rec => (
              <div key={rec.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="font-semibold text-lg">{rec.user}</p>
                    <p className="text-gray-600 mt-1">{rec.recommendation}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    rec.status === 'Sent' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {rec.status}
                  </span>
                </div>
                <div className="mt-3">
                  <button
                    onClick={() => {
                      setRecommendations(recommendations.map(r => 
                        r.id === rec.id ? { ...r, status: 'Sent' } : r
                      ))
                    }}
                    className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 text-sm"
                  >
                    Mark as Sent
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProviderDashboard

