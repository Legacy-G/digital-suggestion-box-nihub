import React, { useState } from 'react';
import AuthCard from '../components/AuthCard';
import axios from '../services/api';
import toast from 'react-hot-toast';
import AdminNavbar from '../components/AdminNavbar'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await axios.post('/auth/login', formData);
      toast.success('logged-In successfully!');
       navigate('/adminDashboard');
    } catch (err) {
      setError(err.response?.data?.error || 'Login failed');
    }
  };

  return (
    <>
    <AdminNavbar/>
    <AuthCard title="Admin Login">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
            <label className="text-sm">Username</label>
          <input
            type="username"
            name="username"
            className="w-full border rounded px-3 py-2"
            value={formData.username}
            onChange={handleChange}
            required
          />
          </div>
          <div>
          <label className="text-sm">Password</label>
          <input
            type="password"
            name="password"
            className="w-full border rounded px-3 py-2"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <Link to="/register" className="inline-flex items-center gap-1 text-sm hover:underline">
                    <p className="text-x mt-3 text-blue-500">Please Register if you are not an admin .</p>
                  </Link>
        </div>
        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700"
        >
          Login
        </button>
      </form>
      {error && <p className="mt-4 text-red-500 text-sm">{error}</p>}
    </AuthCard>
    </>
  );
};

export default Login;
