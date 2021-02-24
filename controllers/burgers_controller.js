const express = require('express');
var burger = require('../model/burger');
var router = express.Router();
//Get all burgers
router.get('/', async (req, res)=>{
    try{//Get data
        var data = await burger.all();
        res.render('index', {burger: data});
    }catch(err){//On error
        res.status(500);
        res.send(err)
    }
});

router.post('/api/burger', async(req, res)=>{
    try{//Submit data
        await burger.create(req.body.name);
        res.send('Success');
    }catch(err){//On error
        res.status(500);
        res.send(err);
    }
});

router.put('/api/burger/:id', async(req,res)=>{
    try{//Submit data
        await burger.update(req.params.id);
        res.send('success')
    }catch(err){//On error
        res.status(500);
        res.send(err);
    }
});

module.exports = router;