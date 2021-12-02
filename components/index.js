const router = require('express').Router();

router.use('/weather',require('./controller/weather'))

module.exports = router;
