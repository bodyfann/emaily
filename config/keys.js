if (process.env.NODE_ENV === "production") {
  module.exports = require("./prod"); //For Cloud hosting (e.g.: Heroku). Not used at this time.
} else {
  module.exports = require("./dev");
}
