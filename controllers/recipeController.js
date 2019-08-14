const db = require('../models');

module.exports = {
  createRecipe: function(req, res) {
    db.Recipe.create(req.body)
      .then(dbRecipe => {
        res.json(dbRecipe);
        return db.User.findOneAndUpdate(
          { _id: dbRecipe.userId },
          { $push: { recipes: dbRecipe } },
          { upsert: true, new: true },
        );

      })
      .catch(err => res.status(422).json(err));
  },

  deleteRecipe: function(req, res) {
    db.Recipe.findOneAndRemove({ _id: req.params.id })
      .then(dbRecipe => {
        return db.User.findByIdAndUpdate(
          { _id: dbRecipe.user_id },
          { $pull: { recipes: dbRecipe._id } },
          { new: true },
        );
      })
      .catch(err => res.json(err));
  },

  updateRecipe: function(req, res) {
    db.Recipe.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
};
