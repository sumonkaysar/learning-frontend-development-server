const express = require('express')
const app = express()
const cors = require('cors')
const port = 5000;


app.use(cors())

app.get('/', (req, res) => {
  res.send('Learning frontend development server running')
})


app.listen(port, () => {
  console.log(`Iphone server is running on port: ${port}`)
})