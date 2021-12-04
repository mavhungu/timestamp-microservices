const express = require('express')
const router = express.Router()
const timestampdate = require('../controllers/timestampDate.controller')

router.route('/api/timestamp:date')
.get((timestampdate))

module.exports = router