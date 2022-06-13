const userModel= require("../models/userModel")

const createUser= async function (req, res) {
    let data= req.body
    let savedData= await userModel.create(data)
    /*if (!req.headers.isfreeappuser){
        res.send({msg: "This request is missing a mandatory part."})
    }
    else{
        res.send(savedData)
    } */
    res.send(savedData)
}

/*
    //Get all headers from request
    // console.log("Request headers before modificatiom",req.headers)
    //Get a header from request
    // console.log(req.headers.batch)
    // console.log(req.headers["content-type"])
    // console.log(tokenDataInHeaders)
    //Set a header in request
    // req.headers['month']='June' //req.headers.month = "June"

    //Set an attribute in request object
    // req.anything = "everything"
    
    
    // console.log("Request headers after modificatiom",req.headers)
    
    //Set a header in response
    // res.header('year','2022')
    // res.send({msg: "Hi"})
}

/*
const getUsersData= async function (req, res) {
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})
}
*/

module.exports.createUser= createUser
// module.exports.getUsersData= getUsersData
// module.exports.basicCode= basicCode