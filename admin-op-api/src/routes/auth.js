const express = require('express')
const router = express.Router()
const auth = require('../middlewares/auth')

router.post('/singin', (req, res) => {
    res.json(auth.singIn(req.body))
})

router.post('/singup', async (req, res) => {
    let token = await auth.signUp(req.body)
    res.json(token)
})

module.exports = router;