import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import authRoutes from './routes/auth.js'
import userRoutes from './routes/users.js'
import videoRoutes from './routes/videos.js'
import commentRoutes from './routes/comments.js'
//import cookieSession from 'cookie-session'
import cookieParser from 'cookie-parser'
import session from 'express-session'
import cookieSession from 'cookie-session'

dotenv.config()

const port = process.env.PORT || 8800

const app = express()

var sess = {
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true, sameSite: 'none' },
}

app.use(session(sess))

const connect = () => {
  mongoose
    .set('strictQuery', false)
    .connect(process.env.MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('Connected to DB')
    })
    .catch((err) => {
      throw err
    })
}

// app.use(
//   cookieSession({
//     keys: ['abcd'],
//     secure: true,
//     httpOnly: true,
//     sameSite: 'none',
//   })
// )

app.use(cookieParser())

app.use(express.json())
app.use('/api/auth', authRoutes)
app.use('/api/users', userRoutes)
app.use('/api/videos', videoRoutes)
app.use('/api/comments', commentRoutes)

app.use((err, req, res, next) => {
  const status = err.status || 500
  const message = err.message || 'Something went wrong'
  return res.status(status).json({
    success: false,
    status: status,
    message,
  })
})
app.listen(port, () => {
  connect()
  console.log('Connected')
})
