const express = require('express')
const router = express.Router()
const videos = require('../controllers/videos')

router.get('/videos', videos.getVideos)

router.get('/videos/:id', videos.getVideo)

module.exports = router