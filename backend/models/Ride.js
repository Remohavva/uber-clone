const mongoose = require('mongoose');

const RideSchema = new mongoose.Schema({
  rider: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: false
  },
  driver: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  pickup: {
    address: { type: String, required: true },
    location: {
      type: { type: String, default: 'Point' },
      coordinates: [Number]
    }
  },
  destination: {
    address: { type: String, required: true },
    location: {
      type: { type: String, default: 'Point' },
      coordinates: [Number]
    }
  },
  status: {
    type: String,
    enum: ['requested', 'accepted', 'started', 'completed', 'cancelled'],
    default: 'requested'
  },
  price: {
    type: Number,
    required: true
  },
  paymentStatus: {
    type: String,
    enum: ['pending', 'completed'],
    default: 'pending'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  completedAt: {
    type: Date
  }
});

// Create indexes for location-based queries
RideSchema.index({ "pickup.location": "2dsphere" });
RideSchema.index({ "destination.location": "2dsphere" });

module.exports = mongoose.model('Ride', RideSchema);
