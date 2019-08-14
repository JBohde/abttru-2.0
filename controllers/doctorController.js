const db = require('../models');

module.exports = {
  login: function(req, res) {
    const {
      body: { email, password },
    } = req;
    db.Doctor.findOne({ email }, function(err, user) {
      if (err) throw err;
      if (user) {
        user.comparePassword(password, function(err, isMatch) {
          if (err) throw err;
          req.session.user = user;
          res.json(user);
        });
      }
    }).catch(err => res.status(422).json(err));
  },

  findAll: function(req, res) {
    db.User.find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findById: function(req, res) {
    db.Doctor.findById(req.params.id)
      .populate({
        path: 'patients',
        populate: { path: 'patients' },
        options: { sort: { last_name: 1 } },
      })
      .exec()
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findPatientById: function(req, res) {
    db.User.findById(req.params.id)
      .populate({
        path: 'recipes',
        populate: { path: 'notes' },
      })
      .exec()
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  createPatient: function(req, res) {
    db.User.create(req.body)
      .then(dbUser => {
        res.json(dbUser);
        return db.Doctor.findOneAndUpdate(
          { _id: dbUser.doctorId },
          { $push: { patients: dbUser } },
          { upsert: true, new: true },
        );
      })
      .catch(err => res.status(422).json(err));
  },

  updatePatient: function(req, res) {
    db.User.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  deletePatient: function(req, res) {
    db.User.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbUser => {
        return db.Doctor.findByIdAndUpdate(
          { _id: dbUser.doctorId },
          { $pull: { patients: dbUser } },
        );
      })
      .catch(err => {
        res.json(err);
      });
  },
};
