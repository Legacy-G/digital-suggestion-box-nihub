import React, { lazy, Suspense, useEffect, useState } from 'react';
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
import useMediaQuery from './hooks/useMediaQuery';
import Navbar from './components/Navbar';
import Home from './pages/home';
import { Toaster } from 'react-hot-toast';
import axios from './services/api';
import PrivateRoute from './router/PrivateRoute';

const Login = lazy(() => import('./pages/login'));
const Register = lazy(() => import('./pages/register'));
const AdminDashboard = lazy(() => import('./pages/AdminDashboard'));
const SuggestionDetail = lazy(() => import('./pages/suggestionDetail'));


const App = () => {
  const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  
  useEffect(() => {
    const handleScroll = () => setIsTopOfPage(window.scrollY === 0);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <div className="w-full bg-slate-50">
        <Suspense fallback={<div className="p-8">Loading...</div>}>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Navbar isTopOfPage={isTopOfPage} />
                  <Home />
                  <Toaster position="top-right" />
                </>
              }
            />
            <Route path="/login" element={<><Login setIsAuthenticated={setIsAuthenticated} />
           <Toaster position="top-right" /></>} />
            <Route path="/register" element={<><Register />
           <Toaster position="top-right" /></>} />
            <Route
              path="/adminDashboard"
              element={
                 <PrivateRoute>
                  <AdminDashboard />
                  </PrivateRoute>
              }
            />
            <Route path="/suggestion/:id" element={
               <PrivateRoute>
              <SuggestionDetail />
              </PrivateRoute>} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
    </div>
  );
};

export default App;
