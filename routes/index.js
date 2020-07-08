const express = require('express')
const router = express.Router()

router.get('/', (red, res) => {
    res.render('index')
})

module.exports = router