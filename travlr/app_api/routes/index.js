const express = require('express');
const router = express.Router();

// This is where we import the controllers we will route
const tripsController = require('../controllers/trips');

// Define route for our trips endpoint
router
    .route("/trips")
    .get(tripsController.tripsList) // GET Method routes tripsList
    .post(tripsController.tripsAddTrip); // POST Method Adds a Trip

// GET Method routes tripsFindByCode - requires parameter
// PUT Method routes tripsUpdateTrip - requires parameter

router
    .route("/trips/:tripCode")
    .get(tripsController.tripsFindByCode)
    .put(tripsController.tripsUpdateTrip);

// DELETE Method routes tripsDeleteTrip - requires parameter
router
    .route("/trips/:tripCode")
    .delete(tripsController.tripsDeleteTrip);

module.exports = router;