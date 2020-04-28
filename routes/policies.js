const router = require('express').Router()
const fetch = require('node-fetch')
const db = require('../db/Policies.js')
const clients = require ('../db/Clients.js');

router.get('/client/:client', (req, res) =>{
    let auntenticated = req.isAuthenticated();
    let client = req.params.client;
    if(auntenticated && req.user.role == "admin"){
        fetch(db)
        .then(response=>response.json())
        .then(data=>{
            let policy = data.policies.filter(policy => policy.clientId == client);
            if(policy){
                res.send(policy);
            }
        })
    }else{
        res.send(auntenticated ? "You do not have permission to access this information" : "You're not logged")
    }
})
router.get('/:id', (req, res) => {
    let auntenticated = req.isAuthenticated();
    let id = req.params.id;
    if(auntenticated && req.user.role == "admin"){
        fetch(db)
        .then(response=>response.json())
        .then(data=>{
            let policy = data.policies.find(policy => policy.id == id);
            
            if(policy){
                fetch(clients)
                .then(response=>response.json())
                .then(data=>{
                    let user = data.clients.find(user => user.id == policy.clientId);
                    if(user){
                        res.send(user);
                    }else{
                        res.send("User don't fund.")
                    }
                })
            }
        })
    }else{
        res.send(auntenticated ? "You do not have permission to access this information" : "You're not logged")
    }                                            
})



module.exports = router