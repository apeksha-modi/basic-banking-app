const express = require("express");
const router = require("./APIs/routes");
const cors= require("cors");
const bodyparser= require("body-parser");
const bodyParser = require("body-parser");
const app = express();
const PORT=3030;



app.use("/api",router);
app.use(cors());
app.use(bodyParser());

app.get("/",(req,res)=>{

    res.send("server ke taraf se HAA hai!👍");
});
app.listen(PORT,()=>{

    console.log("hello ji! server start ho gya!"+PORT);
});
