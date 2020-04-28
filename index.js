//we import libreries // importamos las librerias
const app = require('express')();
const session = require ('express-session');
const bodyParser = require('body-parser');
const passport = require ('passport');
const localStrategy = require ('passport-local').Strategy;
const clients = require ('./db/Clients.js');
const fetch = require('node-fetch')

//import the routes of our api // importamos las rutas de nuestra api
const clientRoutes = require('./routes/clients.js')
const policiesRoutes = require ('./routes/policies.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(session({ secret: 'anything' }));
app.use(passport.initialize());
app.use(passport.session());
app.use('/api/v1/clients/', clientRoutes);
app.use('/api/v1/policies/', policiesRoutes);
passport.use(new localStrategy({
    usernameField: 'email',
    passwordField: 'email',
  },
  function(username, password, done) {
    fetch(clients)
    .then(response=>response.json())
    .then(data => {
        return data.clients.find(elem => elem.email == username)
        
    })
    .then(user=>{
        if (!user) {
            return done(null, false, { message: 'Incorrect username.' });
          }
          return done(null, user);
    })
}))
passport.serializeUser(function(user, done) {
  done(null, user);
});
passport.deserializeUser(function(user, done) {
  done(null, user);
});



//we get up the server // levantamos el servidor y lo ponemos a la escucha en el puerto 8000
app.listen(8000, ()=>{
    console.log('Listening at port 8000')
})

module.exports = app;