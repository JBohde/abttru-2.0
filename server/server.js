const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const dbConnection = require('./db');
const routes = require('./routes/routes');
const passport = require('./routes/auth/passport');
const MongoStore = require('connect-mongo')(session);
const path = require('path');
const dotenv = require('dotenv');
const PORT = process.env.PORT || 3001;
const app = express();

dotenv.config();

// Configure to use body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
  session({
    secret: process.env.APP_SECRET || 'keyboard cat',
    store: new MongoStore({ mongooseConnection: dbConnection }),
    resave: false,
    saveUninitialized: false,
  }),
);

// Passport
app.use(passport.initialize());
app.use(passport.session());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(
    '/static',
    express.static(path.join(__dirname, '../client/build/static')),
  );
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/'));
  });
}
// Add API Routes
app.use('/api', routes);

// Error handler
app.use(function (err, req, res, next) {
  console.log('====== ERROR =======');
  console.error(err.stack);
  res.status(500);
});

app.listen(PORT, function () {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
