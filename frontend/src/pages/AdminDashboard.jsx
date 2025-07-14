import React, { useEffect, useState } from 'react';
import axios from '../services/api';
import Navbar from '../components/AdminNavbar';
import SuggestionTable from '../components/SuggestonTable';
import FilterBar from '../components/FilterBar';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Dashboard = () => {
  const [suggestions, setSuggestions] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [status, setStatus] = useState('');
  const [category, setCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');


  const fetchSuggestions = async () => {
  try {
    const res = await axios.get('/suggestions/admin/filter', {
      params: {
        status,
        category,
      },
    });
    setSuggestions(res.data);
    setFiltered(res.data);
  }  catch (err) {
      console.error('Error fetching suggestions:', err);
    }
  };

  useEffect(() => {
    fetchSuggestions();
  }, [status, category]);

  useEffect(() => {
    const filtered = suggestions.filter((s) =>
      s.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFiltered(filtered);
  }, [searchTerm, suggestions]);

  return (
    <div>
      <Navbar />
      <main className="p-6 bg-[#f8f9ff] min-h-screen">
        <h2 className="text-2xl font-bold mb-1">Suggestions Dashboard</h2>
        <p className="text-sm text-gray-500 mb-6">
          View, manage, and categorize all user suggestions.
        </p>

        <FilterBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          setCategory={setCategory}
          setStatus={setStatus}
        />

        <SuggestionTable suggestions={filtered} />
        
      </main>
    </div>
  );
};

export default Dashboard;
