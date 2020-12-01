var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('just a test');
});

module.exports = router;
