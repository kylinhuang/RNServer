'use strict'

const Koa = require('koa')
var logger = require('koa-logger');
var session = require('koa-session');
var bodyParser = require('koa-bodyparser');

const app = new Koa()


app.keys = ['RN1']
app.use(logger())
app.use(session(app))
app.use(bodyParser())


var router = require('./config/routes')();
// var router = require('./config/routes')()

app.use(router.routes())
   .use(router.allowedMethods())

// app.use( function *( next )  {
//   console.log(this.href);
// 	console.log(this.method);
//
//   this.body = {
//     success : true
//   }
//   yield next
//
// })

app.listen(3000)
console.log('[demo] start-quick is starting at port 3000')
