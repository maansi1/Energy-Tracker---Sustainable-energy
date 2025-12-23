import Navbar from './Navbar'
import Footer from './Footer'
function Contact() {
    return (
        <div>
        <Navbar />
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center px-4 py-16">
      
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-gray-600">
            Have questions or need support? We're here to help you.  
            Send us a message and we’ll get back to you soon.
          </p>
        </div>
  
        {/* Form */}
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Name */}
            <div className="col-span-1">
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Your Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="John Doe"
              />
            </div>
  
            {/* Email */}
            <div className="col-span-1">
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="you@example.com"
              />
            </div>
  
            {/* Subject */}
            <div className="col-span-2">
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Subject
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="How can we help you?"
              />
            </div>
  
            {/* Message */}
            <div className="col-span-2">
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="Write your message here..."
              ></textarea>
            </div>
  
            {/* Button */}
            <div className="col-span-2 flex justify-center">
              <button
                type="submit"
                className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
  
        {/* Extra Info */}
        <div className="max-w-2xl mx-auto text-center mt-10 text-gray-600">
          <p>Email: support@yourapp.com</p>
          <p>Phone: +91 XXXXX XXXXX</p>
        </div>
      </div>  
      </div>   
       
      
    );
}
export default Contact;