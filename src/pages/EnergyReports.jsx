import { Link } from 'react-router-dom'

function EnergyReports() {
  const reports = [
    {
      period: 'January 2024',
      totalUsage: 42000,
      averageDaily: 1355,
      peakUsage: 1800,
      savings: 0,
      comparison: '+5%'
    },
    {
      period: 'February 2024',
      totalUsage: 37500,
      averageDaily: 1293,
      peakUsage: 1650,
      savings: 4500,
      comparison: '-10.7%'
    },
    {
      period: 'March 2024',
      totalUsage: 36000,
      averageDaily: 1161,
      peakUsage: 1500,
      savings: 6000,
      comparison: '-14.3%'
    }
  ]

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
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Energy Reports</h2>

        {/* Summary Card */}
        <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg shadow-md p-6 mb-8 text-white">
          <h3 className="text-xl font-semibold mb-4">Overall Summary</h3>
          <div className="grid md:grid-cols-4 gap-4">
            <div>
              <p className="text-sm opacity-90">Total Savings</p>
              <p className="text-2xl font-bold">10,500 kWh</p>
            </div>
            <div>
              <p className="text-sm opacity-90">Average Daily Usage</p>
              <p className="text-2xl font-bold">1,272 kWh</p>
            </div>
            <div>
              <p className="text-sm opacity-90">Best Month</p>
              <p className="text-2xl font-bold">March 2024</p>
            </div>
            <div>
              <p className="text-sm opacity-90">Improvement</p>
              <p className="text-2xl font-bold">-14.3%</p>
            </div>
          </div>
        </div>

        {/* Monthly Reports */}
        <div className="space-y-6">
          {reports.map((report, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">{report.period}</h3>
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  report.comparison.startsWith('-') 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}>
                  {report.comparison} vs previous month
                </span>
              </div>
              <div className="grid md:grid-cols-4 gap-4">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Total Usage</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {report.totalUsage.toLocaleString()} kWh
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Average Daily</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {report.averageDaily.toLocaleString()} kWh
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Peak Usage</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {report.peakUsage.toLocaleString()} kWh
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Savings</p>
                  <p className="text-2xl font-bold text-green-600">
                    {report.savings > 0 ? '+' : ''}{report.savings.toLocaleString()} kWh
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Export Options */}
        <div className="mt-8 bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4">Export Report</h3>
          <div className="flex gap-4">
            <button className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
              Download PDF
            </button>
            <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Export CSV
            </button>
            <button className="px-6 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700">
              Email Report
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EnergyReports

