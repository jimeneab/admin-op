const express = require('express')
const router = express.Router()

const customersService = require('../services/customers')

router.get('/', async (req,res) => {
    let allCustomers = await customersService.getAll()
    res.json(allCustomers)
})

router.post('/', async (req,res) => {
    let newCustomer = await customersService.create(req)
    res.json(newCustomer)
})

router.get('/:id', async (req,res) => {
    let customer = await customersService.getById(req)
    res.json(customer)
})

router.put('/:id', async (req,res) => {
    let updatedCustomer = await customersService.update(req)
    res.json(updatedCustomer)
})

router.delete('/:id', async (req,res) => {
    let deletedCustomer = await customersService.delete(req)
    res.json(deletedCustomer)
})

module.exports = router;