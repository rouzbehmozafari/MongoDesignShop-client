const {MongoClient} = require("mongodb");

let db;

 function connectToDB(){
    if (typeof db === "undefined"){
        const url = process.env.url
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