import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('token');
      
      if (token) {
        try {
          const response = await axios.get('http://localhost:5001/api/users/me', {
            headers: {
              'x-auth-token': token
            }
          });
          
          setUser(response.data);
        } catch (err) {
          console.error('Error fetching user data:', err);
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex justify-center items-center">
        <div className="text-white text-2xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 min-h-screen">
      {/* User Profile Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        {user && (
          <div className="bg-gray-800 shadow rounded-lg p-6 mb-10">
            <div className="flex items-center space-x-4">
              <div className="rounded-full bg-gray-700 h-20 w-20 flex items-center justify-center text-2xl text-white font-bold">
                {user.firstName?.charAt(0)}{user.lastName?.charAt(0)}
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">{user.firstName} {user.lastName}</h2>
                <p className="text-gray-300">{user.email}</p>
                <p className="text-gray-300 capitalize">{user.role}</p>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Action Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Request Ride Card */}
          <div className="bg-gray-800 rounded-lg shadow overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-2">Request a Ride</h3>
              <p className="text-gray-300 mb-4">Get to your destination quickly and safely.</p>
              <Link
                to="/request-ride"
                className="inline-block px-4 py-2 border border-transparent text-base font-medium rounded-md text-black bg-white hover:bg-gray-200"
              >
                Request Now
              </Link>
            </div>
          </div>
          
          {/* Ride History Card */}
          <div className="bg-gray-800 rounded-lg shadow overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-2">Your Ride History</h3>
              <p className="text-gray-300 mb-4">View your past rides and receipts.</p>
              <Link
                to="/ride-history"
                className="inline-block px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-gray-700 hover:bg-gray-600"
              >
                View History
              </Link>
            </div>
          </div>
          
          {/* Driver Section (only shown for drivers) */}
          {user && user.role === 'driver' && (
            <div className="bg-gray-800 rounded-lg shadow overflow-hidden md:col-span-2">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">Driver Dashboard</h3>
                <p className="text-gray-300 mb-4">Manage your driver account, view ride requests, and track earnings.</p>
                <Link
                  to="/driver/dashboard"
                  className="inline-block px-4 py-2 border border-transparent text-base font-medium rounded-md text-black bg-white hover:bg-gray-200"
                >
                  Go to Dashboard
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
