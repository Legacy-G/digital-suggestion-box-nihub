import React from 'react';
import { Link } from 'react-router-dom';
import { Home, LayoutDashboard, LogOut } from 'lucide-react';

const AdminNavbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-3 bg-white shadow">
      <div className="text-lg font-semibold">
        <span>NIHUB Admin</span>
      </div>
      <div className="space-x-4">
        <Link to="/" className="inline-flex items-center gap-1 text-sm hover:underline">
          <Home size={16} /> Home
        </Link>
        <Link to="/adminDashboard" className="inline-flex items-center gap-1 text-sm hover:underline">
          <LayoutDashboard size={16} /> Dashboard
        </Link>
      </div>
    </nav>
  );
};

export default AdminNavbar;
