const express = require("express")
const dotenv = require("dotenv")

const app = express();
const Port = process.env.PORT ||5000;

app.get("/api/contacts",require("./Routes/ContactRoute"))



app.listen(Port,()=>{
    console.log( `Server is running on ${Port}`)
})