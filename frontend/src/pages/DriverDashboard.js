import React, { useState } from 'react';

const DriverDashboard = () => {
  const [isOnline, setIsOnline] = useState(false);
  const [currentLocation, setCurrentLocation] = useState('');
  
  // Mock ride requests data
  const [rideRequests] = useState([
    {
      id: 1,
      pickup: '123 Main St',
      dropoff: '456 Market St',
      passengers: 2,
      distance: '3.2 miles',
      fare: '$15.50',
      estimatedTime: '15 mins',
      passengerRating: '4.8',
    },
    {
      id: 2,
      pickup: '789 Oak Ave',
      dropoff: '321 Pine St',
      passengers: 1,
      distance: '1.8 miles',
      fare: '$12.75',
      estimatedTime: '8 mins',
      passengerRating: '4.9',
    }
  ]);

  const [earnings] = useState({
    today: 124.50,
    week: 876.25,
    month: 3245.75,
    rides: 45,
    hours: 28,
    rating: 4.9
  });

  const toggleOnlineStatus = () => {
    setIsOnline(!isOnline);
  };

  const handleLocationUpdate = (e) => {
    setCurrentLocation(e.target.value);
  };

  const acceptRide = (rideId) => {
    // TODO: Implement ride acceptance logic
    console.log('Accepting ride:', rideId);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Status and Location Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-4 md:mb-0">
              <h2 className="text-2xl font-bold mb-2">Driver Dashboard</h2>
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full mr-2 ${isOnline ? 'bg-green-500' : 'bg-red-500'}`}></div>
                <span className={`font-medium ${isOnline ? 'text-green-500' : 'text-red-500'}`}>
                  {isOnline ? 'Online' : 'Offline'}
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleOnlineStatus}
                className={`px-6 py-2 rounded-lg font-medium ${
                  isOnline
                    ? 'bg-red-500 text-white hover:bg-red-600'
                    : 'bg-green-500 text-white hover:bg-green-600'
                }`}
              >
                {isOnline ? 'Go Offline' : 'Go Online'}
              </button>
            </div>
          </div>
          
          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Current Location</label>
            <input
              type="text"
              value={currentLocation}
              onChange={handleLocationUpdate}
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-black focus:border-black"
              placeholder="Update your current location"
            />
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-2">Today's Earnings</h3>
            <p className="text-3xl font-bold">${earnings.today.toFixed(2)}</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-2">This Week</h3>
            <p className="text-3xl font-bold">${earnings.week.toFixed(2)}</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-2">This Month</h3>
            <p className="text-3xl font-bold">${earnings.month.toFixed(2)}</p>
          </div>
        </div>

        {/* Map Section */}
        <div className="bg-gray-300 rounded-lg min-h-[300px] mb-8 flex items-center justify-center">
          <p className="text-gray-600">Map will be integrated here</p>
        </div>

        {/* Available Rides Section */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-bold mb-6">Available Ride Requests</h3>
          {rideRequests.length > 0 ? (
            <div className="space-y-4">
              {rideRequests.map((ride) => (
                <div key={ride.id} className="border border-gray-200 rounded-lg p-6 hover:border-black transition-colors">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-500">Pickup</p>
                      <p className="font-medium">{ride.pickup}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Dropoff</p>
                      <p className="font-medium">{ride.dropoff}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Distance</p>
                      <p className="font-medium">{ride.distance}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Estimated Time</p>
                      <p className="font-medium">{ride.estimatedTime}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div>
                        <p className="text-sm text-gray-500">Passengers</p>
                        <p className="font-medium">{ride.passengers}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Passenger Rating</p>
                        <p className="font-medium">⭐ {ride.passengerRating}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Fare</p>
                        <p className="font-medium text-green-600">{ride.fare}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => acceptRide(ride.id)}
                      className="bg-black text-white px-6 py-2 rounded-lg font-medium hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                    >
                      Accept Ride
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No ride requests available at the moment</p>
              <p className="text-gray-400">New requests will appear here</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DriverDashboard;
