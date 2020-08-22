const mongoose = require('mongoose');
// Save a reference to the Schema constructor
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');
const SALT_WORK_FACTOR = 10;

const userSchema = new mongoose.Schema({
  doctorId: String,
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  dob: Date,
  sex: String,
  heightFoot: Number,
  heightInch: Number,
  weight: Number,
  waist: Number,
  bpSystolic: String,
  bpDiastolic: String,
  riskFactor: {
    type: String,
    require: true,
  },
  dietRecommendation: {
    type: String,
    require: true,
  },
  dietRestriction: {
    type: String,
    require: true,
  },
  userPhoto: {
    type: String,
    require: true,
  },
  recipes: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Recipes',
    },
  ],
  created: Date,
  updated: Date,
});

userSchema.pre('save', function(next) {
  let user = this;
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

userSchema.methods.comparePassword = function(password) {
  return bcrypt.compare(password, this.password)
};

module.exports = mongoose.model('User', userSchema);
