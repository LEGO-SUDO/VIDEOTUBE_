import express from 'express'
import { verify } from 'jsonwebtoken'
import { addComment, deleteComment, getComment } from '../Controller/comment.js'
import { verifyToken } from '../verifyToken.js'

const router = express.Router()

// add comment
router.post('/', verifyToken, addComment)

//delete comment
router.delete('/:id', verifyToken, deleteComment)

//get comment
router.get('/:videoId', getComment)

export default router
