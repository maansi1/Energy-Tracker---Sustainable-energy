import { useState } from "react";
import { Link } from "react-router-dom";

function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:5000/api/users/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Success: " + data.message);
        setEmail("");
      } else {
        alert("Error: " + (data.error || "Something went wrong"));
      }
    } catch (error) {
      console.error("Newsletter error:", error);
      alert("Server is not responding.");
    }
  };

  return (
    <footer className="bg-white dark:bg-black w-full border-t border-gray-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Stay Updated</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-lg">
              Get the latest updates delivered straight to your inbox.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md">
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-900 text-gray-900 dark:text-white"
                required
              />
              <button type="submit" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg">
                Subscribe
              </button>
            </form>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/contact" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900">Contact</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;