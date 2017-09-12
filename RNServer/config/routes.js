'use strict'
var Router = require('koa-router')
var User = require('../app/controllers/user')
// var App = require('../app/controllers/app')



module.exports = function() {
  var router = new Router({
    prefix : '/api/1'
  })

  router.post('/u/signup', User.signup);

  return router

}
