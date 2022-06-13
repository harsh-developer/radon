// const userModel = require("../models/userModel")
const orderModel = require("../models/orderModel")
const productModel= require("../models/productModel")

const mid1 = function (req, res, next) {
    req.falana = "hi there. i am adding something new to the req object"
    console.log("Hi I am a middleware named Mid1")
    next()
}

const mid2 = function (req, res, next) {
    if (!req.headers.isfreeappuser) {
        res.send({ msg: "This request is missing a mandatory part." })
    }
    next()
}

const mid3 = function (req, res, next) {
    let order= req.body
    if (order.userId) {
        if (order.productId) {
            if (orderModel.findOne({ _id: order.userId })) {
                if (productModel.findOne({ _id: order.productId })) {
                    next()
                } else {
                    res.send("Product Id is not valid")
                }
            } else {
                res.send("User id is not valid")
            }
        } else {
            res.send("Product Id is required.")
        }
    } else {
        res.send("User id is required")
    }
    next()
}

module.exports.mid1 = mid1
module.exports.mid2 = mid2
module.exports.mid3 = mid3