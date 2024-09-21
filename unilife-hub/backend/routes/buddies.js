// routes/buddies.js
const express = require('express');
const Buddy = require('../models/Buddy');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const { subject, semester, skills } = req.query;
    let query = {};

    if (subject) query.subjects = { $regex: subject, $options: 'i' };
    if (semester) query.semester = semester;
    if (skills) query.skills = { $in: skills.split(',').map(skill => new RegExp(skill.trim(), 'i')) };

    const buddies = await Buddy.find(query);
    res.json(buddies);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;