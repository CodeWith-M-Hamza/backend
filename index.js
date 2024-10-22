require('dotenv').config()
const express = require('express')
const app = express()


app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter',(req,res)=>{
    res.send("hamza How are you ?")
})
app.get('/login',(req,res)=>{
    res.send("<h1>login page at Hamza website</h1>")
})
app.get('/youtube',(req,res)=>{
    res.send("<h2>Hamza is watching vidoe on youtube</h2>")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
// const express=require('express');
// const app=express()
// const port=5000

// app.get('/',(req,res)=>{
//     res.send("<h3>Hello are  you there</h3>");

// })
// app.listen(port,()=>{
//     console.log(`server is successfully running on port= ${port}`)
// })