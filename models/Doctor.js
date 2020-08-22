const mongoose = require('mongoose');
// Save a reference to the Schema constructor
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');
const SALT_WORK_FACTOR = 10;

const doctorSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  doctorPhoto: {
    type: String,
    require: true,
  },
  facilityName: String,
  specialty: String,
  patients: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
  created: Date,
});

doctorSchema.pre('save', function(next) {
  var user = this;
  // only hash the password if it has been modified (or is new)
  if (!user.isModified('password')) return next();

  // generate a salt
  bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
    if (err) return next(err);
    // hash the password using our new salt
    bcrypt.hash(user.password, salt, function(err, hash) {
      if (err) return next(err);
      // override the cleartext password with the hashed one
      user.password = hash;
      next();
    });
  });
});

doctorSchema.methods.comparePassword = function(password) {
  return bcrypt.compare(password, this.password)
};

module.exports = mongoose.model('Doctor', doctorSchema);
