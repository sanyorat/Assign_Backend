// eslint-disable-next-line import/extensions
const Chat = require('../models/chatModel.js');

// Function to determine the intent based on the user message
const determineIntent = async (message) => {
  // Convert message to lowercase for case-insensitive comparison
  const lowerCaseWords = message
    .toLowerCase()
    .split(' ')
    .map((word) => word.toLowerCase().replace(/s$/, ''));

  // Search for a chat document where the intent matches any part of the message
  const chatEntry = await Chat.findOne({
    intent: {
      $in: lowerCaseWords,
    },
  });

  // If a matching document is found, return the intent
  if (chatEntry) {
    return chatEntry.intent;
  }

  // If no matching document is found, return 'unknown'
  return 'unknown';
};

// Example usage of the determineIntent function
exports.getReply = async (req, res) => {
  try {
    const { message } = req.body;

    // Validate request
    if (!message) {
      return res.status(400).json({
        status: 'fail',
        message: 'message is a required fields',
      });
    }

    // Determine the intent based on the message
    const intent = await determineIntent(message);

    // Fetch the response based on the intent from the database
    const chatEntry = await Chat.findOne({ intent });

    if (!chatEntry) {
      return res.status(404).json({
        status: 'fail',
        message: "I still can't answer this",
      });
    }

    // Select a random response if there are multiple
    const response =
      chatEntry.responses[
        Math.floor(Math.random() * chatEntry.responses.length)
      ];

    // Send response
    res.status(200).json({
      status: 'success',
      data: {
        response,
        intent: chatEntry.intent,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: 'error',
      message: err.message,
    });
  }
};

///////////////////////////////////////////////
