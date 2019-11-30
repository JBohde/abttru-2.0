# abttru-2.0

A React app created with a passion for food that connects you to recipes from all over the web!

## Table of Contents

- [How it works](#how-it-works)
  - [At a glance](#at-a-glance)
- [Using the App](#using-the-app)
  - [Guest search](#guest-search)
    - [Single ingredients](#single-ingredient)
    - [Multiple ingredients](#multiple-ingredients)
  - [Adding a patient](#adding-a-patient)
    - [Multi-step form](#multi-step-form)
    - [Edit patient information](#edit-patient-information)
    - [Delete patients](#delete-patients)
  - [Patient search](#patient-search)
    - [Detailed nutrition breakdown](#detailed-nutrition-breakdown)
    - [Saving and deleting recipes ](#saving-and-deleting-recipes)
    - [Saving and deleting notes](#saving-and-deleting-notes)
- [Collaborators](#collaborators)

## How it works

### At a glance

As a guest, you may be able to look up recipes from the web by typing ingredients into our form. Check out this [guest search](#guest-search) for an example.

As a user, you may be either a doctor/dietitian or a patient. Doctors/dietitians are able to store patient health information such as age, sex, risk factors, and diet recommendations, as well as a login and password with our patient form. You can watch a doctor register a patient [here](#adding-a-patient).

Once registered by their doctor/dietitian, patients are able to log in, review their health dashboard, and search for recipes. The patient recipe search is refined to match his/her health dashboard. Additionally, patients have the ability to save and delete recipes and notes on these. Finally, patients have access to detailed nutritional information for each recipe so they can review the content of their food. Check out this [patient search](#patient-search) to see it in action!

## Using the App

### Guest Search

1. Click/tap 'continue as guest'.

2. Fill out the input area with ingredients of your choice.

#### Single Ingredients

- Entering an ingredient will yield 10 random recipes that contain such ingredient.
- Each recipe is accompanied by a simple nutritional breakdown of macros

<!-- place gif of single guest search here -->

![guest search](gifs/guest-search.gif)

#### Multiple Ingredients

- Entering multiple ingredients separated by commas will yield recipes that include all ingredients searched.

  <!-- place gif of multiple ingredient guest search here  -->

  ![guest-search-multiple](gifs/guest-search-multiple.gif)

### Adding a patient

1. Click/tap 'Login as Doctor' and login with your given email and password.

2. Click/tap 'Add patient' to walk through the patient form.

#### Multi-step form

<!-- place gif of doctor going through form -->

![multi-step](gifs/multi-step.gif)

3. Once you go through adding patient information, you can go and check back on your patient list.
   > Hint: Mind the dropdown below your doctor dashboard.

#### Edit patient information

1. Selecting one of your patients from the doctor page brings up that patient's profile.
2. Clicking the 'edit' button brings back the multi-step form, allowing you to update any previously entered patient information.

<!-- place gif of doctor editing patient info -->

![edit-patient](gifs/edit-patient.gif)

#### Delete patients

1. Select a patient from the doctor page.
2. Clicking delete will permanently delete that patient along with their information, saved recipes, and saved notes.

<!-- place gif of doctor deleting patient -->

![delete-patient](gifs/delete-patient.gif)

### Patient Search

Once registered, patients can use their given login and password in order to access their health dashboard and search for recipes as per their doctor's recommendations!

#### Detailed nutrition breakdown

The patient recipe search will yield a detailed nutritional breakdown in different categories, including macronutrients, fats, vitamins, and minerals. Hover over or tap on each color to discover the % contribution of each nutrient **within** categories. All nutrition information is given per portion of the recipe.

> Within category percentages may be interpreted in the following way: 50% of all vitamins per portion of this recipe come from vitamin A.

 <!-- place gif going over each subplot  -->

![patient-search](gifs/patient-search.gif)

#### Saving and deleting recipes

Patients can save recipes and revisit these by clicking the 'saved recipes' tab in their profile. Once multiple recipes are saved you can choose which one to display. Clicking/tapping the recipe picture will allow you to [write notes](#saving-and-deleting-notes) on your recipes and/or delete them.

<!-- place gif going over saving and deleting recipes -->

![delete-recipe](gifs/delete-recipe.gif)

#### Saving and deleting notes

Click/tap on any of your saved recipes' picture and take or delete notes.

<!-- place gif going over saving and deleting notes -->

![add-delete-notes](gifs/add-delete-notes.gif)

## Collaborators

We worked really hard to bring you a robust application and we're super proud of it. Our team members are composed of:

- [Alberto Vargas](https://github.com/a-vargasmarte)
- [David Coulombe](https://github.com/DaveyStacks)
- [Joshua Bohde](https://github.com/JBohde)
