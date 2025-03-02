const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const User = require('../models/User');
const Ride = require('../models/Ride');

// @route   GET api/drivers/rides
// @desc    Get all rides for a driver
// @access  Private
router.get('/rides', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (user.role !== 'driver') {
      return res.status(403).json({ msg: 'Not authorized' });
    }

    const rides = await Ride.find({ driver: req.user.id })
      .sort({ createdAt: -1 });
    res.json(rides);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route   GET api/drivers/stats
// @desc    Get driver statistics
// @access  Private
router.get('/stats', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (user.role !== 'driver') {
      return res.status(403).json({ msg: 'Not authorized' });
    }

    const completedRides = await Ride.find({
      driver: req.user.id,
      status: 'completed'
    });

    const stats = {
      totalRides: completedRides.length,
      totalEarnings: completedRides.reduce((sum, ride) => sum + ride.price, 0),
      averageRating: 4.5 // Placeholder for rating system
    };

    res.json(stats);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route   PUT api/drivers/availability
// @desc    Update driver availability status
// @access  Private
router.put('/availability', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (user.role !== 'driver') {
      return res.status(403).json({ msg: 'Not authorized' });
    }

    const { available } = req.body;
    user.available = available;
    await user.save();

    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
