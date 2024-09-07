const express = require('express');
const chatController = require('../controllers/chatController');

const router = express.Router();

router.route('/message').post(chatController.getReply);

module.exports = router;
