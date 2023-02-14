require("dotenv").config()
const { User } = require("../models/User.model")

const signup = async (req, res) => {
    const { name } = req.body
    console.log("🚀 ~ file: user.controller.js:6 ~ signup ~ name", name)
    const new_user = new User({ name })
    try {
        await new_user.save()
        res.status(200).send({ msg: "Sign up successfully" })
    }
    catch (err) {
        res.status(409).send({ msg: "Something went wrong, please try again" })
    }
}

module.exports = { signup }