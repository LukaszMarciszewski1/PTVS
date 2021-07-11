const Video = require('../db/models/video')
module.exports = {
  async getVideos(req, res) {
    try {
      const videos = await Video.find({}).sort({ _id: -1 })
      res.status(200).json(videos)
    } catch (err) {
      return res.status(404).json({ message: err.message })
    }
  },

  async getVideo(req, res) {
    const id = req.params._id
    console.log(id)
    try {
      const video = await Video.findOne({ _id: id })
      res.status(200).json(video)
    } catch (err) {
      return res.status(404).json({ message: err.message })
    }
  },
}
