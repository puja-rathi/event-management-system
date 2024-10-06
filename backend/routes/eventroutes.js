const express = require("express");
const router = express.Router();
const { createEvent, getEvents } = require("../controllers/eventController");

// Create an event
router.post("/", createEvent);

// Get all events
router.get("/", getEvents);

module.exports = router;
