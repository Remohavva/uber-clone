import React, { useState } from 'react';

const RideRequest = () => {
  const [rideData, setRideData] = useState({
    pickup: '',
    dropoff: '',
    passengers: 1,
    rideType: 'standard',
  });

  const [estimatedPrice, setEstimatedPrice] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement ride request logic
    console.log('Ride request:', rideData);
  };

  const handleChange = (e) => {
    setRideData({
      ...rideData,
      [e.target.name]: e.target.value,
    });
  };

  const rideTypes = [
    { id: 'standard', name: 'Standard', price: '15-20', time: '5-10' },
    { id: 'premium', name: 'Premium', price: '25-30', time: '3-7' },
    { id: 'xl', name: 'XL', price: '30-40', time: '7-12' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Map Section */}
          <div className="bg-gray-300 rounded-lg min-h-[400px] md:min-h-[600px] flex items-center justify-center">
            <p className="text-gray-600">Map will be integrated here</p>
          </div>

          {/* Ride Request Form */}
          <div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-6">Request a Ride</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Pickup Location
                  </label>
                  <input
                    type="text"
                    name="pickup"
                    value={rideData.pickup}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
                    placeholder="Enter pickup location"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Dropoff Location
                  </label>
                  <input
                    type="text"
                    name="dropoff"
                    value={rideData.dropoff}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
                    placeholder="Enter destination"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Number of Passengers
                  </label>
                  <input
                    type="number"
                    name="passengers"
                    value={rideData.passengers}
                    onChange={handleChange}
                    min="1"
                    max="6"
                    className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Select Ride Type
                  </label>
                  <div className="grid grid-cols-1 gap-4">
                    {rideTypes.map((type) => (
                      <label
                        key={type.id}
                        className={`relative flex items-center justify-between p-4 border rounded-lg cursor-pointer hover:border-black ${
                          rideData.rideType === type.id ? 'border-black' : 'border-gray-300'
                        }`}
                      >
                        <div className="flex items-center">
                          <input
                            type="radio"
                            name="rideType"
                            value={type.id}
                            checked={rideData.rideType === type.id}
                            onChange={handleChange}
                            className="h-4 w-4 text-black focus:ring-black border-gray-300"
                          />
                          <div className="ml-3">
                            <span className="block text-sm font-medium">{type.name}</span>
                            <span className="block text-sm text-gray-500">{type.time} mins</span>
                          </div>
                        </div>
                        <span className="text-sm font-medium">${type.price}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-black text-white p-4 rounded-lg font-medium hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                >
                  Request Ride
                </button>
              </form>
            </div>

            {estimatedPrice && (
              <div className="mt-4 bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-medium mb-2">Estimated Price</h3>
                <p className="text-3xl font-bold">${estimatedPrice}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RideRequest;
