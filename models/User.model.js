const mongoose = require("mongoose")

const Schema = new mongoose.Schema({
    name: { type: String, required: true }
})
const User = mongoose.model("user", Schema)

module.exports = { User }