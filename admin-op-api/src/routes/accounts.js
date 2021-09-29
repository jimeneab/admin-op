const express = require('express')
const router = express.Router()

const accountsService = require('../services/accounts')

router.get('/', (req, res) => {
  let accounts = accountsService.getAll()
    res.json(accounts)
})

router.post('/', async (req, res) => {
    let newAccount = await accountsService.createAccount(req)
    res.json(newAccount)
})

router.get('/:id',(req,res) => {
    let id = req.params
    res.json(accountsService.getAccountById(id))
})

router.put('/:id', (req,res) => {
    let id = req.params
    res.json(accountsService.updateAccount(id))
})

router.delete('/:id', (req,res) => {
    let id= req.params
    res.json(accountsService.deleteAccount(id))
})

module.exports = router;