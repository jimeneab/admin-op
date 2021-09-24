const express = require('express');
const router = express.Router()

const teamsServices = require('../services/teams')

router.get('/', async (req,res)=>{
    let allTeams = await teamsServices.getAll()
    res.json(allTeams)
})

router.post('/', async (req,res) => {
    let updatedTeam = await teamsServices.create(req)
    res.json(updatedTeam)
})

router.get('/:id', async (req,res) => {
    let team = await teamsServices.getById(req)
    res.json(team)
})

router.put('/:id', async (req,res) => {
    let updatedTeam = await teamsServices.update(req)
    res.json(updatedTeam)
})

router.delete('/:id', async (req,res) => {
    let deletedTeam = teamsServices.delete(req)
    res.json(deletedTeam)
})

module.exports = router