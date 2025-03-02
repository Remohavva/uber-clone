const { mapsClient, apiKey } = require('../config/maps');

const getMapsService = {
  async getDistance(origin, destination) {
    try {
      const response = await mapsClient.distancematrix({
        params: {
          origins: [origin],
          destinations: [destination],
          key: apiKey
        }
      });
      return response.data;
    } catch (error) {
      throw new Error('Maps service error: ' + error.message);
    }
  }
};

module.exports = getMapsService;