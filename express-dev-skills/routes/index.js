var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', function (req, res) {
  let title = 'titleone'
  res.render('index', { title })
})

module.exports = router
