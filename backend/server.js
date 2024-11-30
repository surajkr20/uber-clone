
const http = require('http')
const app = require('./app')
const port = process.env.PORT || 7000

const server = http.createServer(app)

server.listen(port,()=>{
    console.log(`server started at port ${port}`)
})