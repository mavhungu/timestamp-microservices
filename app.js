const express = require('express')
const app = express()
const hbs = require('hbs')
const port = process.env.PORT || 3000

const home = require('./router/home')
const timestampRouter =  require('./router/timestamp.router')
const timestampDateRouter = require('./router/timestampdateRouter')

app.set('view engine', 'hbs')
app.set('views',path.join(__dirname,'templates/views'))
hbs.registerPartial(path.join(__dirname,'templates/partials'))

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname,'public')))

app.get('/',home)
app.get('/api/timestamp', timestampRouter)
app.get('/api/timestamp:date',timestampDateRouter)


app.listen(port,()=>{
    console.log(`Server is running at port ${port}`)
})