var Promise = require('bluebird');
var db = require('../db');

module.exports = {
  messages: {
    get: function (cb) {
      db.query('SELECT messages.message, rooms.room FROM messages JOIN rooms ON messages.room = rooms.id', (err, results) => {
        if (err) {
          throw err;
        } else {
          console.log('Successful get messages');
          cb(results);
        }
      })
    }, // a function which produces all the messages
    post: function (data, cb) {
      var date = formatDate();
      db.query('INSERT INTO messages (message, username, room, createdAt) VALUES ("' + data.message + '", 1, 1, ' + date + ')', (err, results) => {
        if (err) {
          throw err;
        } else {
          console.log('Successful made messages query');
          cb(results);
        }
      });
      //INSERT INTO messages (message) VALUES (data)
      //grab the message from the data and insert it to the messages table
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (cb) {
      db.query('SELECT * FROM usernames', (err, results) => {
        if (err) {
          throw err;
        } else {
          console.log('Successful get users');
          cb(results);
        }
      })
    },
    post: function (data, cb) {
      db.query('INSERT IGNORE INTO usernames (username) VALUES ("' + data.username + '")', (err, results) => {
        if (err) {
          throw err;
        } else {
          console.log('Successful made usernames query');
          cb(results);
        }
      });

      //INSERT INTO usernames (username) VALUES (data)
      //grab the username from the data and insert it to the users table
    }
  },

  rooms: {
    get: function() {},
    post: function (data) {
      db.query('INSERT IGNORE INTO rooms (room) VALUES ("' + data.roomname + '")', (err, results) => {
        if (err) {
          throw err;
        } else {
          console.log('Successful made room query');
        }
      });
      //INSERT INTO rooms (room) VALUES (data)
      //grab the roomname from the data and insert it to the rooms table
    }
  }
};

function formatDate() {
  var d = new Date(),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear(),
      hour = d.getHours(),
      min = d.getMinutes(),
      sec = d.getSeconds();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return year + month + day + hour + min + sec;
}
