const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')


app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://localhost:27017')

app.post('/api/register',(req,res) =>{
    console.log(req.body)
    res.json({ status: 'ok'})
})


app.listen(1337, () => {
    console.log('Server started on 1337')
})