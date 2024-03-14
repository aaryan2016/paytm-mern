const express = require("express")
const { authMiddleware } = require("../middleware")
const jwt = require("jsonwebtoken")
const JWT_SECRET = require("../config")
const { User, Account } = require("../db")

const router = express.Router()

router.get("/", authMiddleware, async (req, res) => {
  const token = req.headers.authorization.split(" ")[1]

  const decoded = jwt.decode(token)

  const user = await Account.findOne({
    userId: decoded.userId,
  }).populate("userId")

  return res.json({
    firstname: user.userId.firstname,
    lastname: user.userId.lastname,
    userId: user.userId._id,
    balance: user.balance.toFixed(2),
  })
})

module.exports = router
