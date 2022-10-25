const express = require('express')
const app = express()
const cors = require('cors')
const port = 5000;
const courses = require('./data/courses.json')


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