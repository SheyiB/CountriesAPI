const express = require('express')

const router = express.Router()

const {getAllCountries} = require('../controller/data')

router.get('/countries', getAllCountries)

module.exports = router