const mongoose = require('mongoose');

module.exports = (on, config) => {
  on('task', {
    connectToDatabase(uri) {
      return mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }).then(() => 'Conexión exitosa')
        .catch((err) => `Error de conexión: ${err.message}`);
    }
  });
};
