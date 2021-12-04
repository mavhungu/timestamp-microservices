const express = require('express')
const app = express()
const hbs = require('hbs')
const port = process.env.PORT || 3000

const home = require('./router/home')
const timestampRouter =  require('./router/timestamp.router')

app.set('view engine', 'hbs')
app.set('views',path.join(__dirname,'templates/views'))
hbs.registerPartial(path.join(__dirname,'templates/partials'))

app.get('/',home)
app.get('/api/timestamp', timestampRouter)


app.listen(port,()=>{
    console.log(`Server is running at port ${port}`)
})