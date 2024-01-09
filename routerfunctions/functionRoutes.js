
const GetAllUsers = (req,res)=>{
    res.status(404)
    throw new Error("Get error!!!")
    res.send('router get url')
}

const CreateUsers = (req,res)=>{
    const { name, email, password } = req.body
    if(!name || !email || !password){
        res.status(404)
        throw new Error("Get new errrrr!!!")
    }
    res.send(`router post url: ${name}`)
}

const UpdateUsers=(req,res)=>{
    res.send('router put url')
}
const DeleteUsers=(req,res)=>{
    res.send('router delete url')
}


module.exports = {
    GetAllUsers,
    CreateUsers,
    UpdateUsers,
    DeleteUsers
}