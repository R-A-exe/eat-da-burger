const express = require('express');
var burger = require('../model/burger');
var router = express.Router();

router.get('/', async (req, res)=>{
    try{
        var data = await burger.all();
        res.render('index', {burger: data});
    }catch(err){
        res.status(500);
        res.send(err)
    }
});

router.post('/api/burger', async(req, res)=>{
    try{
        await burger.create(req.body.name);
        res.send('Success');
    }catch(err){
        res.status(500);
        res.send(err);
    }
});

router.put('/api/burger/:id', async(req,res)=>{
    try{
        await burger.update(req.params.id);
        res.send('success')
    }catch(err){
        res.status(500);
        res.send(err);
    }
});

module.exports = router;