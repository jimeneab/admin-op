const express = require('express')
const router = express.Router()

const accountsService = require('../services/accounts')

router.get('/', async (req, res) => {
  let allAccounts = await accountsService.getAll()
  res.json(allAccounts)
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

router.delete('/:id', async (req,res) => {
    let id= req.params.id
    let deletedAccount = await accountsService.deleteAccount(id)
    res.json(deletedAccount)
})

module.exports = router;