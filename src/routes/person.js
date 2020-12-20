let express=require('express');
let route=express.Router()


//call person object here
//callback is call when use make request
route.get('/person',(req,res)=>{
    res.send('You request person')
})


//param property on request object
//localhost:3000/person/Sia
route.get('/person/:name',(req,res)=>{
    res.send(`You request person ${req.params.name}`)
})



route.get('/error',(req,res)=>{
    throw new Error('This foreced error')
})



module.exports=route