if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dev'); //For Cloud hosting (e.g.: Heroku). Not used at this time.
} else {
  module.exports = require('./dev');
}
