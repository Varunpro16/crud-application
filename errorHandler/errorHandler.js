module.exports = function(err,req,res,next){
    if(res.statusCode===404){
        res.json({"message":"404 error"})
    }else if(res.statusCode===500){
        res.json({"message":"500 error"})
    }
    else if(res.statusCode===401){
        res.json({"message":"Admin not valid error"})
    }
}
