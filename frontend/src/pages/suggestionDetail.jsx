import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from '../services/api';
import Navbar from '../components/AdminNavbar';

const SuggestionDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [suggestion, setSuggestion] = useState(null);
  const [status, setStatus] = useState('');
  const [comment, setComment] = useState('');
  const [adminComment, setAdminComment] = useState('');
  const token = localStorage.getItem('token');

  const fetchSuggestion = async () => {
    try {
      const res = await axios.get('/suggestions');
      const single = res.data.find((s) => s.id === parseInt(id));
      if (!single) return navigate('/dashboard');

      setSuggestion(single);
      setStatus(single.status);
      setAdminComment(single.admin_comment || '');
    } catch (err) {
      console.error(err);
    }
  };

  const handleStatusUpdate = async () => {
    try {
      await axios.put(
        `/suggestions/${id}/status`,
        { status, admin_comment: adminComment },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      fetchSuggestion();
    } catch (err) {
      console.error(err);
    }
  };

  const handleComment = () => {
    setAdminComment(comment);
    setComment('');
  };

  useEffect(() => {
    fetchSuggestion();
  }, []);

  if (!suggestion) return <div>Loading...</div>;

  return (
    <div>
      <Navbar />
      <main className="p-6 bg-[#f8f9ff] min-h-screen">
        <Link to="/adminDashboard" className="text-sm text-gray-500 hover:underline mb-4 inline-block">
          &larr; Back to Dashboard
        </Link>

        <div className="bg-white p-6 rounded-lg shadow mb-6">
          <h3 className="text-xl font-bold mb-2">{suggestion.title}</h3>
          <div className="flex items-center text-xs text-gray-500 space-x-4 mb-2">
            <span>{suggestion.category}</span>
            <span>{new Date(suggestion.submitted_at).toLocaleDateString()}</span>
            <span>{suggestion.is_anonymous ? 'Anonymous' : 'User'}</span>
          </div>
          <p className="text-sm text-gray-700">{suggestion.description}</p>
        </div>

       
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <div className="bg-white p-6 rounded-lg shadow mb-4">
              <h4 className="font-semibold mb-3">Comments</h4>
              {suggestion.admin_comment && (
                <div className="bg-gray-50 border p-3 rounded mb-2">
                  <p className="text-sm">
                    <strong>Admin:</strong> {suggestion.admin_comment}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">{new Date(suggestion.submitted_at).toLocaleString()}</p>
                </div>
              )}

              <textarea
                className="w-full border rounded px-3 py-2 text-sm"
                rows={3}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Type your comment here..."
              />
              <button
                onClick={handleComment}
                className="mt-2 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
              >
                Add Comment
              </button>
            </div>
          </div>

          {/* Side Actions */}
          <div className="space-y-4">
            <div className="bg-white p-4 rounded shadow">
              <h5 className="font-semibold mb-2">Details</h5>
              <label className="text-sm">Status</label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="block w-full mt-1 border rounded px-3 py-2 text-sm"
              >
                <option>Pending</option>
                <option>In Progress</option>
                <option>Completed</option>
                <option>Rejected</option>
              </select>
              <button
                onClick={handleStatusUpdate}
                className="mt-3 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
              >
                Update Status
              </button>
            </div>

            <div className="bg-white p-4 rounded shadow">
              <h5 className="font-semibold mb-2">AI Analysis</h5>
              <p className="text-sm text-gray-500 mb-2">Get AI-powered category suggestions.</p>
              <button className="w-full bg-purple-500 text-white py-2 rounded opacity-50 cursor-not-allowed">
                Suggest Categories
              </button>
              {/* Not functional yet */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SuggestionDetail;
