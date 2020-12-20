let express=require('express')
let app=express()
let path=require('path')
let bodyParser=require('body-parser')
app.use(bodyParser.json())

let personRoute=require('./routes/person')
let customerRoute=require('./routes/customer')
app.use((req,res,next)=>{
    console.log(`${new Date().toString()}=>${req.originalUrl}`,req.body)
    next()
})


app.use(personRoute)
app.use(customerRoute)

//set middleware static which is part of express
//middleware is simply function which is excute back to back or serially in request pipline
app.use(express.static('public'))
//handler for 404-Resource not found
app.use((req,res,next)=>{
    res.status(404).send('We think you are lost')
})

//handler for Error 500-


//.. indicate goout to root than find public  combining the path and express will lookup the file reading
//content and send them
app.use((err,req,res,next)=>{
    res.sendFile(path.join(__dirname,'../public/500.html'))
})

const PORT=3000

app.listen(PORT,()=>console.info(`Serever start on ${PORT}`))
