var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(function(results) {
        res.send(results);
      })
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      models.rooms.post(req.body, function() {
      });

      models.messages.post(req.body, function(results) {
        res.send(results);
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get(function(results) {
        res.send(results);
      })
    },
    post: function (req, res) {
      models.users.post(req.body, function(results) {
        res.send(results);
      });
    }
  }
};

