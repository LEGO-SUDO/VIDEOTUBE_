import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Comment from './Comment'

import { useSelector } from 'react-redux'
import SendSharpIcon from '@mui/icons-material/SendSharp'

const Container = styled.div``

const NewComment = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`

const Input = styled.input`
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.text};
  background-color: transparent;
  outline: none;
  padding: 5px;
  width: 100%;
`

const Comments = ({ videoId }) => {
  const [newComment, setNewComment] = useState('')
  const { currentUser } = useSelector((state) => state.user)
  const [comments, setComments] = useState([])
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await axios.get(`/comments/${videoId}`)
        setComments(res.data)
      } catch (err) {}
    }
    fetchComments()
  }, [videoId])

  const handleSubmit = async () => {
    const res = await axios.post('/comments', {
      userId: currentUser._id,
      videoId: videoId,
      desc: newComment,
    })
  }

  return (
    <>
      <Container>
        <NewComment>
          <Avatar src={currentUser.img} />
          <Input
            placeholder='Add a comment...'
            onChange={(e) => setNewComment(e.target.value)}
          />
          <SendSharpIcon style={{ color: 'white' }} onClick={handleSubmit} />
        </NewComment>

        {comments.map((comment) => (
          <Comment key={comment._id} comment={comment} />
        ))}
      </Container>
    </>
  )
}

export default Comments
