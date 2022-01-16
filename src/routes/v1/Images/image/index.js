"use strict"

const express = require('express');
const imageController = require('../../../../controllers/images/image.controller');
const router = express.Router({mergeParams: true});


router.get('/', async (req, res, next) => {
    const index = req.params.id
    try {
        const result = await imageController.getImage(index)
        res.send(result)
    } catch (err) {
        next(err)
    }
});

module.exports = router;