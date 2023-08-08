const express = require('express')
const router = express.Router()

router.get('/', function (req, res) {
  res.render('index', { activeMenu: 0, layout: 'layout'});
});

router.get('/about', function (req, res) {
  res.render('about', { activeMenu: 1 });
});

router.get('/contact-me', function (req, res) {
  res.render('contact-me', { activeMenu: 2 });
});

module.exports = router;