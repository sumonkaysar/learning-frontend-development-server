const express = require('express')
const cors = require('cors')
const courses = require('./data/courses.json')

const app = express()
const port = process.env.PORT ||5000;

app.use(cors())

app.get('/', (req, res) => {
  res.send('Learning frontend development server running')
})

app.get('/courses', (req, res) => {
  res.send(courses)
})

app.get('/course/:id', (req, res) => {
  const {id} = req.params
  const course = courses.find(crs => crs.id === id) || {}
  res.send(course)
})

app.listen(port, () => {
  console.log(`Learning frontend development server is running on port: ${port}`)
})