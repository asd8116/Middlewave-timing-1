const express = require('express')
const app = express()
const moment = require('moment')
const port = 3000

const recReqTime = function(req, res, next) {
  req.time = moment()
  next()
}

const showData = function(req, res, next) {
  const reqTime = req.time.format('YYYY-MM-DD HH:mm:ss')
  const resTime = moment()
  const diff = resTime.diff(req.time)

  req.showData = `${reqTime} | ${req.method} from ${req.path} | total time: ${diff}ms`
  next()
}

app.use(recReqTime)
app.use(showData)

// 列出全部 Todo
app.get('/', (req, res) => {
  console.log(req.showData)
  res.send('列出全部 Todo')
})

// 新增一筆 Todo 頁面
app.get('/new', (req, res) => {
  console.log(req.showData)
  res.send('新增 Todo 頁面')
})

// 顯示一筆 Todo 的詳細內容
app.get('/:id', (req, res) => {
  console.log(req.showData)
  res.send('顯示一筆 Todo')
})

// 新增一筆  Todo
app.post('/', (req, res) => {
  console.log(req.showData)
  res.send('新增一筆  Todo')
})

app.delete('/:id/delete', (req, res) => {
  console.log(req.showData)
  res.send('刪除 Todo')
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})
