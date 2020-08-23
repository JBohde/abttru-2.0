const router = require('express').Router();
const doctorController = require('../controllers/doctorController');
const recipeController = require('../controllers/recipeController');
const noteController = require('../controllers/noteController');
const userController = require('../controllers/userController');

// router.route("/abttru/admin")
//   .get(adminController.findAll) // get all users
//   .post(adminController.createUser) // create a doctor

router.route('/abttru/login/doctor').post(doctorController.login);

router
  .route('/abttru/doctor/:id')
  .get(doctorController.findById) // get all patients
  .post(doctorController.createPatient); // create a patient

router
  .route('/abbtru/patient/:id')
  .get(doctorController.findPatientById) // get all patients
  .put(doctorController.updatePatient) // update a patient by id
  .delete(doctorController.deletePatient); // delete a patient by id

router.route('/abttru/login/user').post(userController.login);

router
  .route('/abttru/user/:id')
  .get(userController.findById) // get a user by id
  .put(userController.update) // update a user by id
  .delete(userController.deletePatient); // delete a user by id


router
  .route('/abttru/recipes/:id')
  // .get(recipeController.findOne)
  .post(recipeController.createRecipe) // creates a recipe
  .delete(recipeController.deleteRecipe);

router
  .route('/abttru/recipes/notes/:id')
  .post(noteController.createNote) //creates a note for a recipe
  .delete(noteController.deleteNote);

module.exports = router;
