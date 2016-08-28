// app/routes.js

// grab the nerd model we just created
var Person = require('./models/Person');

   module.exports = function(app) {

       // server routes ===========================================================
       // handle things like api calls
       // authentication routes

       // sample api route
       app.get('/api/persons', function(req, res) {
           // use mongoose to get all nerds in the database
           Person.find(function(err, persons) {

               // if there is an error retrieving, send the error.
                               // nothing after res.send(err) will execute
               if (err)
                   res.send(err);

               res.json(persons); // return all nerds in JSON format
           });
       });

        app.post('/api/persons', function(req, res) {
            console.log(req);
        });

       // route to handle creating goes here (app.post)
       // route to handle delete goes here (app.delete)

       // frontend routes =========================================================
       // route to handle all angular requests
       app.get('*', function(req, res) {
           res.sendfile('./public/index.html'); // load our public/index.html file
       });

   };
