const { Doctor, User } = require('../models');

module.exports = {
  login(req, res) {
    const { body: { email, password } } = req
    Doctor.findOne({ email })
    .then(doctor => doctor.comparePassword(password)
      .then(isMatch => {
        if (isMatch) req.session.doctor = doctor;
        return isMatch ? res.json(doctor) : res.status(403);
      })
    )
    .catch(err => res.status(422).json(err));
  },

  findAll(req, res) {
    User.find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findById(req, res) {
    Doctor.findById(req.params.id)
      .populate({
        path: 'patients',
        populate: { path: 'patients' },
        options: { sort: { last_name: 1 } },
      })
      .exec()
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findPatientById(req, res) {
    User.findById(req.params.id)
      .populate({
        path: 'recipes',
        populate: { path: 'notes' },
      })
      .exec()
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  createPatient(req, res) {
    User.create(req.body)
      .then(dbUser => {
        res.json(dbUser);
        return Doctor.findOneAndUpdate(
          { _id: dbUser.doctorId },
          { $push: { patients: dbUser } },
          { upsert: true, new: true },
        );
      })
      .catch(err => res.status(422).json(err));
  },

  updatePatient(req, res) {
    User.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  deletePatient(req, res) {
    User.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbUser => {
        return Doctor.findByIdAndUpdate(
          { _id: dbUser.doctorId },
          { $pull: { patients: dbUser } },
        );
      })
      .catch(err => {
        res.json(err);
      });
  },
};
