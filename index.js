const express = require('express')
const cors = require('cors')
const courses = require('./data/courses.json')
const categories = require('./data/categories.json')

const app = express()
const port = process.env.PORT ||5000;

app.use(cors())

app.get('/', (req, res) => {
  res.send('Learning frontend development server running')
})

app.get('/categories', (req, res) => {
  res.send(categories)
})

app.get('/category/:id', (req, res) => {
  const {id} = req.params
  const cat_courses = courses.filter(crs => crs.category_id === id) || []
  res.send(cat_courses)
})

app.get('/course/:id', (req, res) => {
  const {id} = req.params
  const course = courses.find(crs => crs.id === id) || {}
  res.send(course)
})

app.listen(port, () => {
  console.log(`Learning frontend development server is running on port: ${port}`)
})