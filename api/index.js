const express = require('express')
const axios = require('axios')
const app = express()
const cors = require('cors')

// app.use(cors())
app.use(cors({ origin: true, credentials: true }))
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// 新規登録（トークン発行）
app.post('/register', async (req, res) => {
  try {
    await axios.post('http://127.0.0.1:8000/api/register/', {
      email: req.body.mail,
      password: req.body.pass,
    })
    await axios
      .post(
        'http://127.0.0.1:8000/authen/jwt/create',
        {
          email: req.body.mail,
          password: req.body.pass,
        },
        {
          'Content-Type': 'application/json',
        }
      )
      .then((rs) => {
        res.send(rs.data.access)
        // return rs.data.access
      })
      .catch((e) => res.send(e))
  } catch (e) {
    res.send(e)
  }
})

// ログイン（トークン発行）
app.post('/login', async (req, res) => {
  await axios
    .post(
      'http://127.0.0.1:8000/authen/jwt/create',
      {
        email: req.body.mail,
        password: req.body.pass,
      },
      {
        'Content-Type': 'application/json',
      }
    )
    .then((rs) => {
      // console.log(rs.data)
      res.send(rs.data.access)
      // return rs.data.access
    })
    .catch((e) => res.send(e))
})

// マイプロフィール
app.post('/myprofile', async (req, res) => {
  await axios
    .get('http://127.0.0.1:8000/api/myprofile', {
      headers: {
        Authorization: `JWT ${req.body.token}`,
      },
    })
    .then((rs) => {
      res.send(rs.data)
    })
})

//投稿取得
app.post('/post/get', async (req, res) => {
  await axios
    .get('http://127.0.0.1:8000/api/post', {
      headers: {
        Authorization: `JWT ${req.body.token}`,
      },
    })
    .then((rs) => {
      res.send(rs.data)
    })
})

// 投稿
app.post('/post/post', async (req, res) => {
  await axios
    .post(
      'http://127.0.0.1:8000/api/post/',
      {
        title: req.body.title,
        text: req.body.text,
      },
      {
        headers: {
          Authorization: `JWT ${req.body.token}`,
        },
      },
      {
        'Content-Type': 'application/json',
      }
    )
    .then((rs) => {
      res.send(rs.data)
    })
    .catch((e) => console.log(e))
})

//　ユーザー情報取得
app.post('/profile', async (req, res) => {
  await axios
    .get('http://127.0.0.1:8000/api/profile/', {
      headers: {
        Authorization: `JWT ${req.body.token}`,
      },
    })
    .then((rs) => {
      res.send(rs.data)
    })
})

module.exports = {
  path: '/api/',
  handler: app,
}
