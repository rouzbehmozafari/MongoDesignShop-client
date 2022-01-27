const express = require('express')
const dotenv = require('dotenv').config()
const {connectToDB , getProds} = require("./dataBase")

connectToDB()

const app = express()
app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public')) 

app.use((req,_,next)=>{
    console.log(req.url)
    next()
})
app.get('/',(req,res)=>{
    getProds().then(prods => {
        // console.log(prods)
        res.render(__dirname + '/pages/views/Homepage.ejs' , {prods})
    }).catch(err=>{console.log(err)})

})
const PORT = 8080 || process.env.PORT
app.listen(PORT,()=>{console.log("on:" , PORT)}) 