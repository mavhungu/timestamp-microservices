const express = require('express')
const router = express.Router()
const timestampController = require('../controllers/timestamp.controller')

router.route('/:date?')
.get(timestampController)


module.exports = router