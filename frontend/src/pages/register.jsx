import React, { useState } from 'react';
import AuthCard from '../components/AuthCard';
import axios from '../services/api';
import toast from 'react-hot-toast';
import AdminNavbar from '../components/AdminNavbar'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
    username: '',
    password: '',
    registration_key: ''
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const response = await axios.post('/auth/register', formData);

      await axios.post('/auth/login', {
      username: formData.username,
      password: formData.password
    });
      setSuccess(response.data.message);
      toast.success('Registered successfully!');
      navigate('/adminDashboard');
    } catch (err) {
      setError(err.response?.data?.error || 'Registration failed');
    }
  };

  return (
    <>
    <AdminNavbar/>
    <AuthCard title="Admin Registration">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="text-sm">Username</label>
          <input
            type="text"
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
        </div>
       <div>
  <label className="text-sm">Registration Key</label>
  <input
    type="password"
    name="registration_key"
    className="w-full border rounded px-3 py-2"
    value={formData.registration_key}
    onChange={handleChange}
    required
  />
</div>
<p className="text-xs mt-1 text-gray-400">Ask your team lead for the key.</p>
<Link to="/login " className="inline-flex items-center gap-1 text-sm hover:underline">
          <p className="text-x mt-3 text-blue-500">Please Login if you are already an admin .</p>
        </Link>
        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700"
        >
          Register
        </button>
      </form>

      {error && <p className="mt-4 text-red-500 text-sm">{error}</p>}
      {success && <p className="mt-4 text-green-600 text-sm">{success}</p>}
    </AuthCard>
    </>
  );
};

export default Register;
