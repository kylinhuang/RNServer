'use strick'

exports.signup = function *(next) {
  this.body  = {
    success : true
  }
}

exports.verify = function *(next) {
  this.body  = {
    success : true
  }
}

exports.update = function *(next) {
  this.body  = {
    success : true
  }
}




// function *(next) {
//   this.body {
//     success : true
//   }
// }

// 子路由1
// home.get('/', async ( ctx )=>{
//   let html = `
//     <ul>
//       <li><a href="/page/helloworld">/page/helloworld</a></li>
//       <li><a href="/page/404">/page/404</a></li>
//     </ul>
//   `
//   ctx.body = html
// })


// app.use( async ( ctx ) => {
//   console.log(this.href);
// 	console.log(this.method);
//
//   ctx.body = 'hello koa2'
//
//   // yield next
//
// })
