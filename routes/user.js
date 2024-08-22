const express = require('express');
const router = express.Router();
const User = require("../models/User");

router.post("/new", async (req, res) => {
    try {
        await User.create(req.body);
        res.json({ status: 1, data: "New User Registered Successfully" })
    } catch (e) {
        console.log("Error on /user/new:", e)
        res.json({ status: 0, data: e })
    }
});
router.post("/auth", async (req, res) => {
    try {
        let user = await User.findOne({ username: req.body.username, password: req.body.password });
        if (user) res.json({ status: 1, data: user })
    } catch (e) {
        console.log("Error on /user/auth:", e)
        res.json({ status: 0, data: e })
    }
})

module.exports = router;