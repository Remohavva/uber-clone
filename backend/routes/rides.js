const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Ride = require('../models/Ride');
const User = require('../models/User');

// @route   POST api/rides
// @desc    Request a new ride
// @access  Private
router.post('/', auth, async (req, res) => {
  try {
    const { pickup, destination, price } = req.body;

    // Create new ride
    const ride = new Ride({
      rider: req.user.id,
      pickup,
      destination,
      price
    });

    await ride.save();
    res.json(ride);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route   GET api/rides
// @desc    Get all rides for a user (as rider or driver)
// @access  Private
router.get('/', auth, async (req, res) => {
  try {
    const rides = await Ride.find({
      $or: [
        { rider: req.user.id },
        { driver: req.user.id }
      ]
    }).sort({ createdAt: -1 });
    res.json(rides);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route   GET api/rides/available
// @desc    Get all available rides (for drivers)
// @access  Private
router.get('/available', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (user.role !== 'driver') {
      return res.status(403).json({ msg: 'Not authorized' });
    }

    const rides = await Ride.find({
      status: 'requested',
      driver: { $exists: false }
    }).sort({ createdAt: -1 });
    res.json(rides);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route   PUT api/rides/:id/accept
// @desc    Accept a ride (for drivers)
// @access  Private
router.put('/:id/accept', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (user.role !== 'driver') {
      return res.status(403).json({ msg: 'Not authorized' });
    }

    const ride = await Ride.findById(req.params.id);
    if (!ride) {
      return res.status(404).json({ msg: 'Ride not found' });
    }

    if (ride.status !== 'requested') {
      return res.status(400).json({ msg: 'Ride is no longer available' });
    }

    ride.driver = req.user.id;
    ride.status = 'accepted';
    await ride.save();

    res.json(ride);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route   PUT api/rides/:id/status
// @desc    Update ride status
// @access  Private
router.put('/:id/status', auth, async (req, res) => {
  try {
    const { status } = req.body;
    const ride = await Ride.findById(req.params.id);

    if (!ride) {
      return res.status(404).json({ msg: 'Ride not found' });
    }

    // Verify user is either the rider or driver
    if (ride.rider.toString() !== req.user.id && ride.driver.toString() !== req.user.id) {
      return res.status(403).json({ msg: 'Not authorized' });
    }

    ride.status = status;
    if (status === 'completed') {
      ride.completedAt = Date.now();
    }
    await ride.save();

    res.json(ride);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }



});


router.post("/request-ride",auth,async(req,res)=>{
  try {
    const {pickup,destination}=req.body
    // const user = new User;
    // if(user.role!="rider"){
    //   const rider=req.params.id
    //   const driver =
    // }
    const driver=await User.findOne({ role: "driver" })
    
    // const rider=req.user.id
    const price=Math.random()*100
    const ride=await Ride.create({pickup,destination,driver,price})

    res.status(201).json({ride})

    
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
})



module.exports = router;
