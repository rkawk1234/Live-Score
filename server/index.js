const express = require('express')
const app = express()

app.get('/hello', (req,res)=>{
    res.send('hi world')
})

app.listen(1337, () => {
    console.log('Server started on 1337')
})