const { Router } = require("express")
const router = Router();
const { signup, } = require("../controllers/user.controller")

router.post("/post", signup)

module.exports = { router }