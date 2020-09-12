const passport = require('passport');
const LocalStrategy = require('./LocalStrategy');
const { User } = require('../../../models');

passport.serializeUser((user, done) => {
  done(null, { _id: user._id });
});

passport.deserializeUser((id, done) => {
  User.findOne({ _id: id }, 'firstName lastName', (err, user) => {
    done(null, user);
  });
});

passport.use(LocalStrategy);

module.exports = passport;