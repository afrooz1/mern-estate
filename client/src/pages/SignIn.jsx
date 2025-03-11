import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';


export default function SignIn() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError(null); // Reset error state before making the request
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data); // Log the API response
      if (data.success === false) {
        setLoading(false);
        setError(data.message); // Set error message
        console.log(error); // Log the error state
        return;
      }
      setLoading(false);
      setError(null);
      navigate('/');
    } catch (error) {
      setLoading(false);
      setError(error.message); // Set network or server error
      console.error(error); // Log the error
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-teal-400 mb-6 text-center">Sign In</h1>

        {/* Signup Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-gray-400 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block text-gray-400 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
          </div>

          {/* Signup Button */}
          <button
            disabled={loading}
            className="w-full bg-teal-400 text-gray-900 py-2 rounded-lg font-semibold hover:bg-teal-300 transition duration-300 disabled:opacity-80"
          >
            {loading ? 'Loading...' : 'Sign In'}
          </button>
        </form>

        {/* Sign In Link */}
        <div className="mt-6 text-center">
          <p className="text-gray-400">Don't have an account?</p>
          <Link
            to="/sign-up"
            className="text-teal-400 hover:text-teal-300 transition duration-300"
          >
            Sign Up
          </Link>
        </div>

        {/* Error Message */}
        {error && <p className="text-red-500 mt-5 text-center">{error}</p>}
      </div>
    </div>
  );
}