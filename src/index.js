const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const req = require('express/lib/request');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
    function (req, res, next){
        console.log("This text is written inside a globel middleware, this will be get printed everytime any of the API will be hitted.")
        next()
    }
)

const getDateAndTime= function(req, res, next){
    var currentDate= new Date()
    var datetime= currentDate.getDate() + "-"
                    + (currentDate.getMonth() + 1) + "-"
                    + currentDate.getFullYear() + "   "
                    + currentDate.getHours() + ":"
                    + currentDate.getMinutes() + ":"
                    + currentDate.getSeconds()
    let ip= req.ip
    let url= req.originalUrl
    console.log(datetime + "   " + ip + "   " + url)
    next()
}
app.use(getDateAndTime)




mongoose.connect("mongodb+srv://functionup-cohort:G0Loxqc9wFEGyEeJ@cluster0.rzotr.mongodb.net/Pritesh8769811-DB?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("Hello Harsh, your MongoDb is connected"))
.catch ( err => console.log(err) )


app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
