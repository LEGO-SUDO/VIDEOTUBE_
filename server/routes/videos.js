import express from 'express'
import { get } from 'mongoose'
import {
  addVideo,
  updateVideo,
  deleteVideo,
  getVideo,
  addView,
  trend,
  random,
  subVideo,
  getByTag,
  search,
} from '../Controller/video.js'
import { verifyToken } from '../verifyToken.js'

const router = express.Router()

//create a video
router.post('/', verifyToken, addVideo)

//update video
router.put('/:id', verifyToken, updateVideo)

// delete video
router.delete('/:id', verifyToken, deleteVideo)

//get video
router.get('/find/:id', getVideo)

//views
router.put('/view/:id', addView)

//trend
router.get('/trend', trend)

//random
router.get('/random', random)

//sub
router.get('/sub', verifyToken, subVideo)

//search by tag
router.get('/tags', getByTag)

//search by title
router.get('/search', search)

export default router
