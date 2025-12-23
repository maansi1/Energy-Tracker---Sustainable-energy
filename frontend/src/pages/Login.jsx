import { useState, useMemo } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'

function Login() {
  const location = useLocation()
  const presetUserType = useMemo(
    () => location.state?.userType || 'homeowner',
    [location.state?.userType]
  )
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    userType: presetUserType
  })
  const navigate = useNavigate()
  const redirectTarget = location.state?.redirect

  // --- UPDATED SUBMIT LOGIC ---
  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch('http://localhost:5000/api/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password
        }),
      })

      const data = await response.json()

      if (response.ok) {
        // 1. Save user info to local storage
        localStorage.setItem('user', JSON.stringify(data)) 
        
        // 2. Determine where to send the user based on type
        const fallbackRoute =
          formData.userType === 'admin'
            ? '/admin'
            : formData.userType === 'provider'
            ? '/provider'
            : '/dashboard'

        alert("Login Successful!")
        navigate(redirectTarget || fallbackRoute)
      } else {
        // Show error message from backend
        alert(data.message || "Invalid Email or Password")
      }
    } catch (error) {
      console.error("Login Error:", error)
      alert("Cannot connect to server. Is your backend running?")
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-lg">
        <div>
          <h2 className="text-center text-3xl font-bold text-gray-900">
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or{' '}
            <Link to="/register" className="font-medium text-green-600 hover:text-green-500">
              create a new account
            </Link>
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="userType" className="block text-sm font-medium text-gray-700">
                Account Type
              </label>
              <select
                id="userType"
                name="userType"
                value={formData.userType}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
              >
                <option value="homeowner">Homeowner</option>
                <option value="provider">Energy Provider</option>
                <option value="admin">Admin</option>
              </select>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={formData.password}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                placeholder="Enter your password"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Sign in
            </button>
          </div>
        </form>
        <div className="text-center">
          <Link to="/" className="text-sm text-gray-600 hover:text-green-600">
            ← Back to home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Login