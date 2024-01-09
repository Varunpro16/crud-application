const express = require('express')
const app = express()
const routes = require('./controlRoutes/routes')
const errorHandler = require('./errorHandler/errorHandler')
const DBConnection = require('./DBConnection/Connection')
const cors = require('cors')

DBConnection()

const User = require('./Schema/Model')

app.use(cors({ origin: ["http://127.0.0.1:5500"] }));
app.use(express.json())
app.use('/api',routes)
app.use(errorHandler)

const Auth = (req,res,next) => {
    console.log(req.body);
    if(req.body.admin==="saii"){
        next()
    }
    res.status(401);
    // throw new Error("Not Admin!!!")
}

app.get('/',async (req,res)=>{
    const users = await User.find({})
    console.log(users);
    res.json(users);
})
app.get('/users/:id',async(req,res)=>{
    const user = await User.findById(req.params.id);
    console.log(user);
    res.json({message:"success",user:user})
})
app.post('/saii',async (req,res)=>{
    const user = new User(req.body)
    await user.save()
    res.json({msg:"created user!!!"});
})
app.post('/users/:id',async (req,res)=>{
    console.log("put request");
    const users = await User.updateOne({_id:req.params.id},req.body)
    console.log("updtaed user: ",users);
    res.json({message:"updated success"});
})

app.delete('/users/:id',async(req,res)=>{
    console.log("info :",req.body.id);
    const result = await User.deleteOne({_id:req.params.id});
    console.log(result);
    res.json({message:"deleted"});
    
})

app.post('/login',Auth,async(req,res)=>{
    const user = await User.findOne({name:req.body.name,password:req.body.password})
    console.log(user);
    if(user){
        res.json({msg:"logged in!!!",userDetail:user})
    }else{
        res.json({msg:"wrong authentication!!!"})
    }
})

// app.get('/',(req,res)=>{
//     res.json({msg:"Get All users"});
// })
// app.post('/saii',(req,res)=>{
//     res.json({msg:"create user"});
// })
// app.delete('/users/:id',(req,res)=>{
//     res.json({msg:`delete the user ${req.params.id}`});
// })
// app.put('/users/:id',(req,res)=>{
//     res.json({msg:`update the user ${req.params.id}`});
// })




// Application-level middleware
// Third-party middleware
// Router-level middleware
// Built-in middleware
// Error-handling middleware


app.listen(3000,()=>{
    console.log("server running!!!");
})