const jwt = require("jsonwebtoken")
const authenticate = function (req, res, next) {

  let token = req.headers["x-Auth-token"];
  if (!token) token = req.headers["x-auth-token"];

  if (!token) return res.send({ status: false, msg: "token must be present" });

  // console.log(token);
  try {
    jwt.verify(token, "functionup-thorium");
  } catch (err) {
    res.status(500).send({ msg: "Error", error: err })
  }
  next()
}


const authorise = function (req, res, next) {
  let token = req.headers["x-auth-token"]
  if (!token) return res.send({ status: false, msg: "token must be present in the request header" })
  let decodedToken = jwt.verify(token, 'functionup-thorium')

  if (!decodedToken) return res.send({ status: false, msg: "token is not valid" })

  let userToBeModified = req.params.userId

  let userLoggedIn = decodedToken.userId

  if (userToBeModified != userLoggedIn) return res.send({ status: false, msg: 'User logged is not allowed to modify the requested users data' })
  next()
}

module.exports.authenticate = authenticate
module.exports.authorise = authorise