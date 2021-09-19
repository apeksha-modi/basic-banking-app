const express = require('express')

const app = express()
const PORT = process.env.PORT || 3300 


app.get('/',(req,res)=>{
    res.send("Hello from the server")
});

app.listen(PORT,()=>{
    console.log("server is listening at port number "+PORT)
});