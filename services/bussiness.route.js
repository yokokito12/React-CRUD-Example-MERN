// business.route.js

const express = require('express');
const businessRoutes = express.Router();

// Require Business model in our routes module
let Profile = require('./business.model');

// Defined store route
businessRoutes.route('/add').post(function (req, res) {

  let profile  = new Profile (req.body);
  profile.save()
    .then(profile => {
      res.status(200).json({'profile': 'profile is added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
businessRoutes.route('/').get(function (req, res) {
    Profile.find(function(err, profile){
    if(err){
      console.log(err);
    }
    else {
      res.json(profile);
    }
  });
});

// Defined edit route
businessRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Profile.findById(id, function (err, profile){
      res.json(profile);
  });
});

//  Defined update route
businessRoutes.route('/update/:id').post(function (req, res) {
    Profile.findById(req.params.id, function(err, profile) {
    if (!profile)
      res.status(404).send("data is not found");
    else {

        profile.person_name = req.body.person_name;
        profile.person_Duty = req.body.person_Duty;
        profile.person_Resumo = req.body.person_Resumo;
        profile.person_Experience = req.body.person_Experience;

        profile.save().then(profile => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
businessRoutes.route('/delete/:id').get(function (req, res) {
    Profile.findByIdAndRemove({_id: req.params.id}, function(err, profile){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = businessRoutes;