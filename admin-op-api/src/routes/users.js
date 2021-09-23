const express = require('express');
const router = express.Router()

const usersService = require('../services/users')

router.get('/',(req, res) => {
    let users = usersService.getAll()
    return res.json(users)
})

router.post('/',(req, res) => {
    let users = usersService.createUser()
    return res.json(users)
})

router.get('/:id',(req, res) => {
    let id = req.params
    let users = usersService.getUserById(id)
    return res.json(users)
})

router.put('/:id',(req, res) => {
    let id = req.params
    let users = usersService.updateUser(id, req.body)
    return res.json(users)
})

router.delete('/:id',(req, res) => {
    let id = req.params
    let users = usersService.deleteUser(id)
    return res.json(users)
})

module.exports = router;