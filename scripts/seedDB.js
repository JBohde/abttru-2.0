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


const randy = {
  name: 'Randy K Mellow',
  email: 'rsmellow@gmail.com',
  password: 'marshmallow',
  doctorPhoto:
    'https://media.licdn.com/dms/image/C5603AQHZBYSHdmoC_A/profile-displayphoto-shrink_200_200/0?e=1539820800&v=beta&t=Qzy7Ukri7hgu3AZPn3pr9sE0ghcFSNy-8qcyGO8jkhw',
  facilityName: 'UNC at Chapel Hill',
  specialty: 'Head of JavaScript Development',
  patients: [],
  created: Date(Date.now()),
};

const doogie = {
  name: 'Doogie Houser, M.D.',
  email: 'doogie@gmail.com',
  password: 'password',
  doctorPhoto:
    'https://m.media-amazon.com/images/M/MV5BNzk0ODYzNjkxNV5BMl5BanBnXkFtZTgwNDY3MTY1MTE@._V1_SY1000_CR0,0,1180,1000_AL_.jpg',
  facilityName: 'Eastman Medical Center',
  specialty: 'Child Genius Physician',
  patients: [],
  created: Date(Date.now()),
};

function seedDoctor(doctor) {
  bcrypt.hash(doctor.password, SALT_WORK_FACTOR).then(hashedPassword => {
    doctor.password = hashedPassword;
    return db.Doctor.deleteMany({})
      .then(() => db.Doctor.collection.insertOne(doctor))
      .then(data => {
        process.exit(0);
      })
      .catch(err => {
        console.log(err);
        process.exit(1);
      });
  });
}

seedDoctor(randy);
seedDoctor(doogie);