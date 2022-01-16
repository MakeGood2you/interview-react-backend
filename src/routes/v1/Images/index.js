"use strict"

const express = require('express');
const imagesController = require('../../../controllers/images/images.controller');
const router = express.Router({mergeParams: true});
const image = require('./image/index')


router.get('/', async (req, res, next) => {
    try {
        const result = await imagesController.getImages()
        res.send(result)
    } catch (err) {
        next(err)
    }
});

router.use('/:id', image)
module.exports = router;