import { createError } from '../error.js'
import Comments from '../models/Comments.js'
import Video from '../models/Video.js'

export const addComment = async (req, res, next) => {
  const newComment = new Comments({ ...req.body, userId: req.user.id })

  try {
    const savedComment = await newComment.save()
    res.status(200).json(newComment)
  } catch (err) {
    next(err)
  }
}

export const deleteComment = async (req, res, next) => {
  try {
    const comment = await Comments.findById(req.params.id)
    const video = await Video.findById(req.params.id)
    if (req.user.id === comment.userId || req.user.id === video.userId) {
      await Comments.findByIdAndDelete(req.params.id)
      res.status(200).json('The comment has been deleted!')
    } else {
      return next(createError(403, 'You can only delete your comment!'))
    }
  } catch (err) {
    next(err)
  }
}

export const getComment = async (req, res, next) => {
  try {
    const comments = await Comments.find({ videoId: req.params.videoId })
    res.status(200).json(comments)
  } catch (err) {
    next(err)
  }
}
