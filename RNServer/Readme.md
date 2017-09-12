# RNServer
### 安装koa2

    # 初始化package.json
    npm init

    # 安装koa2
    npm install koa

### index.js

    const Koa = require('koa')
    const app = new Koa()

    app.use( async ( ctx ) => {
      ctx.body = 'hello koa2'
    })

    app.listen(3000)
    console.log('[demo] start-quick is starting at port 3000')


    
