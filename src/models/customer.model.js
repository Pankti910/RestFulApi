let mongoose=require('mongoose')
mongoose.connect("mongodb://localhost:27017/CustomerDB",{useNewUrlParser:true,useUnifiedTopology: true});
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

let CustomerSchema=new mongoose.Schema({
    name:String,
    email:{
        type:String,
        requirednod:true,
        unique:true
    },
    Age:Number

})

module.exports=mongoose.model('Customer', CustomerSchema)