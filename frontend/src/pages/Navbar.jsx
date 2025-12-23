import { Link, useNavigate } from 'react-router-dom'

function Navbar() {
    const navigate = useNavigate();
    
    // 1. Check if a user is logged in by looking at localStorage
    const user = JSON.parse(localStorage.getItem('user'));

    // 2. Logout function to clear session
    const handleLogout = () => {
        localStorage.removeItem('user'); // Remove the user object
        alert("Logged out successfully!");
        navigate('/login'); // Redirect to login page
    };

    return (
        <nav className="border-b border-gray-200 sticky top-0 z-50 backdrop-blur-sm bg-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                                <span className="text-white text-sm font-bold ">
                                    <img className='w-full h-full object-cover rounded-full' src="https://plus.unsplash.com/premium_vector-1719412238774-cbc8cef4f71d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZW5lcmd5fGVufDB8fDB8fHww" alt="" />
                                </span>
                            </div>
                            <Link to="/">
                                <h1 className="text-2xl font-semibold text-gray-900">ENERGY TRACKER</h1>
                            </Link>
                        </div>
                    </div>
                    
                    <div className="hidden md:flex gap-8 items-center">
                        {/* 3. Conditional Links: Only show these if NOT logged in */}
                        {!user ? (
                            <>
                                <Link
                                    to="/login"
                                    state={{ redirect: '/dashboard', userType: 'homeowner' }}
                                    className="text-gray-700 hover:text-green-600 font-medium"
                                >
                                    Houseowners
                                </Link>
                                <Link
                                    to="/login"
                                    state={{ redirect: '/provider', userType: 'provider' }}
                                    className="text-gray-700 hover:text-green-600 font-medium"
                                >
                                    Providers
                                </Link>
                                <Link
                                    to="/login"
                                    state={{ redirect: '/admin', userType: 'admin' }}
                                    className="text-gray-700 hover:text-green-600 font-medium"
                                >
                                    Admins
                                </Link>
                                <Link 
                                    to="/login" 
                                    className="px-4 py-2 text-gray-700 hover:text-green-600 font-medium"
                                >
                                    Login
                                </Link>
                                <Link 
                                    to="/register" 
                                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 font-medium"
                                >
                                    Get Started
                                </Link>
                            </>
                        ) : (
                            // 4. Show this when a user IS logged in
                            <>
                                <span className="text-gray-900 font-semibold">
                                    Hello, {user.username}
                                </span>
                                <Link 
                                    to="/dashboard" 
                                    className="text-gray-700 hover:text-green-600 font-medium"
                                >
                                    Dashboard
                                </Link>
                                <button 
                                    onClick={handleLogout}
                                    className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 font-medium"
                                >
                                    Logout
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;