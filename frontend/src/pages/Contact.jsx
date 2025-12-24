import { useState } from "react";
import Navbar from './Navbar';
import Footer from './Footer';

function Contact() {
  // 1. State to manage the 4 fields shown in your UI
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    subject: "",
    message: ""
  });

  // 2. Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 3. Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/users/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({ username: "", email: "", subject: "", message: "" });
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Server is not responding.");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center px-4 py-16">
        
        {/* Header - This is where the heading is written */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-gray-600">
            Have questions or need support? We're here to help you.  
            Send us a message and we’ll get back to you soon.
          </p>
        </div>

        {/* Form */}
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Name */}
            <div className="col-span-1">
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Your Name
              </label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="John Doe"
                required
              />
            </div>

            {/* Email */}
            <div className="col-span-1">
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="you@example.com"
                required
              />
            </div>

            {/* Subject */}
            <div className="col-span-2">
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="How can we help you?"
                required
              />
            </div>

            {/* Message */}
            <div className="col-span-2">
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="Write your message here..."
                required
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
      <Footer />
    </div>
  );
}

export default Contact;
