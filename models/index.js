const mongoose = require('mongoose');

module.exports.connect = uri => {
  mongoose.connect(uri, { useNewUrlParser: true });
  
  mongoose.connection.on('error', err => {
    console.log(`Mongoose connection error: ${err}`);
    process.exit(1);
  });

  require('./member');
  require('./documentation');
  require('./update');
};