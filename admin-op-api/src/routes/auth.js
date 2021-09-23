const express = require('express')
const router = express.Router()
const auth = require('../middlewares/auth')

router.post('/singin', (req, res) => {
    res.json(auth.singIn())
})

router.post('/singup', (req, res) => {
    res.json(auth.signUp())
})

module.exports = router;