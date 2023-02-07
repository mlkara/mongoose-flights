const express = require('express');
const router = express.Router();
const destinationsCtrl = require('../controllers/destination   ss');

// All routes "starts with" / (root)

// POST /flights/:id/destinations
router.get('/', destinationsCtrl.index);
router.get('/new', destinationsCtrl.new);
router.post('/', destinationsCtrl.create);
router.get('/:id', destinationsCtrl.show);

module.exports = router;