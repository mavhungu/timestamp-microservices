const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const home = require('./router/home')

app.get('/',home)


app.listen(port,()=>{
    console.log(`Server is running at port ${port}`)
})