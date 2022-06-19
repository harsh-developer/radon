let axios = require("axios")

let getWeather = async function (req, res) {
    try {
        let location = req.query.q
        let cityId = req.query.appid
        // console.log(`query params are: ${location} ${cityId}`)
        var options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${cityId}`
        }
        let result = await axios(options)
        // console.log(result.data)
        res.status(200).send({ msg: result.data })
        // res.status(200).send({ msg: "The temperature of London is " + result.data.main.temp})
    } catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let sortTemp = async function (req, res) {
    try {
        const cities = ["Bengaluru", "Mumbai", "Delhi", "Jaipur", "Kolkata", "Meerut", "Chennai", "London", "Moscow"]
        let cityTempArray = []
        for (i = 0; i < cities.length; i++) {
            let cityId = req.query.appid
            var options = {
                method: "get",
                url: `http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=${cityId}`
            }
            let result = await axios(options)
            let objCity = { city: cities[i], temprature: result.data.main.temp }
            cityTempArray.push(objCity)
        }
        cityTempArray.sort((a, b) => a.temprature - b.temprature)
        res.status(200).send({ cityTempArray })

    } catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }

}

module.exports.getWeather = getWeather
module.exports.sortTemp = sortTemp