const router = require('express').Router()
const fetch = require('node-fetch')
const db = require('../db/Clients.js');
const passport = require ('passport');

router.get('/me',(req, res) =>{
    res.send(req.user)
})
router.get('/', (req, res) => {

    const authenticated = req.isAuthenticated()
    if(authenticated){
        fetch(db)
        .then(response=>response.json())
        .then(data=>{
            res.send(data)
        })
    }else{
        res.send('You need to be logged');
    }

})
router.get('/:param', (req, res) =>{
    const search = req.params.param.toLowerCase();
    const authenticated = req.isAuthenticated()
    if(authenticated){
        fetch(db)
        .then(response=>response.json())
        .then(data=>{
            let user = data.clients.find(user => user.id == search);
            user = user || data.clients.find(user => user.name.toLowerCase() == search);
            if(user){
                res.send(user);
            }else{
                res.send("User don't fund.")
            }
        })
    }else{
        res.send('You need to be logged');
    }
})
router.post('/login', passport.authenticate('local'), (req, res) => {
    const authenticated = req.isAuthenticated();
    if(authenticated){
        res.send({
            id:req.user.id,
            name: req.user.name,
            email: req.user.email,
            role: req.user.role
        }) 
    }
});





module.exports = router