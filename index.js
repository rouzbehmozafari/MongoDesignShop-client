const express = require('express')
const formidable = require('formidable')
const dotenv = require('dotenv').config()
const {connectToDB , getProds,addItem} = require("./dataBase")

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
app.get('/admin',(req,res)=>{
    res.render(__dirname + '/pages/views/admin.ejs')
})
app.post('/newItem',(req,res)=>{
    const form = formidable()
    form.parse(req,(err,fields,files)=>{
        nItem = {
            ProductName : fields.name,
            Company : fields.company,
            Price : fields.price,
            ProductLink : fields.urlpic.toString(),
            LinkShop : fields.urlshop.toString()
        }
        addItem(nItem)
        res.redirect('/')
    })
})
const PORT = 8080 || process.env.PORT
app.listen(PORT,()=>{console.log("on:" , PORT)}) 