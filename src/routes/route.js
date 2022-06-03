const express = require('express');
const router = express.Router();

let players =[
    {
        "name": "manish",
        "dob": "14/05/1992",
        "gender": "male",
        "city": "Delhi",
        "sports": [
               "cricket"
                ]
    },
    {
        "name": "gaurav",
        "dob": "14/11/1989",
        "gender": "male",
        "city": "delhi",
        "sports": [
            "billiards"
        ]
    },
    {
        "name": "harsh",
        "dob": "26/10/2003",
        "gender": "male",
        "city": "meerut",
        "sports": [
            "badminton"
        ]
    },

]

router.post('/player-api', function (req, res){
    let newEntry = req.body
    players.push(newEntry)
    res.send(players)
})



module.exports = router;
// adding this comment for no reason