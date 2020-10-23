const { Doctor, User } = require('../models');

module.exports = {
  login(req, res) {
    const { body: { email, password } } = req
    User.findOne({ email })
    .then(user => user.comparePassword(password)
      .then(isMatch => {
        if (isMatch) req.session.user = user;
        return isMatch ? res.json(user) : res.status(403);
      })
    )
    .catch(err => res.status(422).json(err));
  },

  findById(req, res) {
    User.findById(req.params.id)
      .populate({
        path: 'recipes',
        populate: { path: 'notes' },
        options: { sort: { recipeName: 1 } },
      })
      .exec()
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  update(req, res) {
    User.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  deletePatient(req, res) {
    User.findOneAndRemove({ _id: req.params.id })
    .then(dbUser => {
      return Doctor.findByIdAndUpdate(
        { _id: dbUser.doctor_id },
        { $pull: { patients: dbUser._id } },
        { new: true },
      ).catch(err => {
        res.json(err);
      });
    });
  },
};
