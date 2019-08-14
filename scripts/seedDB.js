const mongoose = require('mongoose');
const db = require('../models');
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;
mongoose.Promise = global.Promise;
// This file empties the Books collection and inserts the books below

mongoose.connect('mongodb://localhost/aBetterYou', {
  useNewUrlParser: true,
  useCreateIndex: true,
});

const hashPassword = password =>
  bcrypt.hash(password, SALT_WORK_FACTOR, (err, hash) => {
    if (err) throw err;
    return hash;
  });

const randyPassword = hashPassword('marshmallow');
const doogiePassword = hashPassword('password');

let doctorSeed = [
  {
    name: 'Randy K Mellow',
    email: 'rsmellow@gmail.com',
    password: randyPassword,
    doctorPhoto:
      'https://media.licdn.com/dms/image/C5603AQHZBYSHdmoC_A/profile-displayphoto-shrink_200_200/0?e=1539820800&v=beta&t=Qzy7Ukri7hgu3AZPn3pr9sE0ghcFSNy-8qcyGO8jkhw',
    facilityName: 'UNC at Chapel Hill',
    specialty: 'Head of JavaScript Development',
    patients: [],
    created: Date(Date.now()),
  },
  {
    name: 'Doogie Houser, M.D.',
    email: 'doogie@gmail.com',
    password: doogiePassword,
    doctorPhoto:
      'http://mccurdywriting.com/wp-content/uploads/2010/09/Doogie_Howser_MD_290x400-290x300.jpg',
    facilityName: 'Eastman Medical Center',
    specialty: 'Child Genius Physician',
    patients: [],
    created: Date(Date.now()),
  },
];
db.Doctor.deleteMany({})
  .then(() => db.Doctor.collection.insertMany(doctorSeed))
  .then(data => {
    process.exit(0);
  })
  .catch(err => {
    res.send(err);
    process.exit(1);
  });
