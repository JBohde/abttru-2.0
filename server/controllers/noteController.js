const db = require('../models');

module.exports = {
  createNote: (req, res) => {
    db.Note.create(req.body)
      .then(dbNote => {
        res.json(dbNote);
        return db.Recipe.findOneAndUpdate(
          { _id: dbNote.recipeId },
          { $push: { notes: dbNote } },
          { upsert: true, new: true },
        );
      })
      .catch(err => res.status(422).json(err));
  },

  deleteNote: (req, res) => {
    db.Note.findOneAndRemove({ _id: req.params.id })
      .then(dbNote => {
        return db.Recipe.findByIdAndUpdate(
          { _id: dbNote.recipeId },
          { $pull: { notes: dbNote._id } },
          { new: true },
        );
      })
      // If an error occurred, send it to the client
      .catch(err => {
        res.json(err);
      });
  },
};
