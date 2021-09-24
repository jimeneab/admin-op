const express = require('express');
const router = express.Router()

const teamsServices = require('../services/teams')

router.get('/', (req,res)=>{
    res.json(teamsServices.getAll())
})

router.post('/', (req,res) => {
    res.json(teamsServices.create(req.body))
})

router.get('/:id', (req,res) => {
    res.json(teamsServices.getById(req.params))
})

router.put('/:id', (req,res) => {
    res.json(teamsServices.update(req))
})

router.delete('/:id', (req,res) => {
    res.json(teamsServices.delete(req.params))
})

module.exports = router