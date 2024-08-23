const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

router.get("/search", async (req, res) => {
    const searchText = req.query.searchText;
    try {
        let response = await fetch(`https://images-api.nasa.gov/search?q=${searchText}&media_type=image`)
        if (response.ok) {
            const responseJson = await response.json();
            const items = responseJson?.collection?.items || [];
            if (items) res.json({ status: 1, data: items })
        } else res.json({ status: 0, data: "Error on /images/search" })

    } catch (e) {
        console.log("Error on /images/search: ", e)
    }
})

module.exports = router;