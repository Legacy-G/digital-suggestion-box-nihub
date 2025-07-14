import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import axios from '../services/api';

const ProtectedRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await axios.get('/auth/check', { withCredentials: true });
        setAuthorized(res.data?.is_admin === true);
      } catch (err) {
        setAuthorized(false);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  if (loading) return <div className="p-4 text-center">Checking access...</div>;
  if (!authorized) return <Navigate to="/login" replace />;

  return children;
};

export default ProtectedRoute;
