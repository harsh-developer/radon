const axios = require("axios")

const getAllMeme = async function (req, res) {
    try {
        let options = {
            method: 'get',
            url: 'https://api.imgflip.com/get_memes'
        }
        let result = await axios(options);
        // console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

const createMeme = async function (req, res) {
    try {
        let memeId = req.query.template_id
        let text0 = req.query.text0
        let text1 = req.query.text1
        let username = req.query.username
        let password = req.query.password
        var options= {
            method: "post",
            url: `https://api.imgflip.com/caption_image?template_id=${memeId}&text0=${text0}&text1=${text1}&username=${username}&password=${password}`
        }
        let result = await axios(options)
        res.status(200).send({msg: result.data})
    } catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


module.exports.getAllMeme = getAllMeme
module.exports.createMeme = createMeme