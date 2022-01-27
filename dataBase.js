const {MongoClient} = require("mongodb");

let db;

 function connectToDB(){
    if (typeof db === "undefined"){
        const url = "mongodb+srv://m001-student:m001-mongodb-basics@cluster0.wqksh.mongodb.net/shop?retryWrites=true&w=majority"
        const client = new MongoClient(url)

        client.connect().then((connected_clinet)=>{
             db =  connected_clinet.db("shop")
        })
    }
}
function getProds(){
    return db.collection('users').find().toArray()
}
module.exports = {connectToDB,getProds}