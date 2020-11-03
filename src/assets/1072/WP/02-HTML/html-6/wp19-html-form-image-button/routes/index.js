var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { postback: false });
});

/* GET home page. */
router.post('/', function(req, res, next) {
  console.log(req.body);  // dump a copy of incoming data
  formData = req.body;
  formData.postback = true;
  res.render('index', formData);
});

module.exports = router;
