var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  let title = 'titleone'
  res.render('index', { title: 'Express' })
})

module.exports = router
