const express = require("express");
const connection=require("../sqlconnection");
const cors=require("cors");
const bodyParser = require("body-parser");
const router = express.Router();
router.get("/",(req,res)=>{
    res.send("apis mai apka swagat hai!");
});


router.use(cors());
router.use(express.json());
router.get("/customers",(req,res)=>{
    const query='select * from customers';
    connection.getConnection((error, tempconnection)=>{
        if (error)
        {
            console.log("error has occured");
            tempconnection.release();
    }
        else{
            tempconnection.query(query,(err,result)=>{
                console.log(result);
                res.json(result);
                tempconnection.release();
            });
        }
    });
});

router.get("/transaction",(req,res)=>{
    const query='select * from transactions';
    connection.getConnection((error, tempconnection)=>{
        if (error)
        {
            console.log("error has occured");
            tempconnection.release();
    }
        else{
            tempconnection.query(query,(err,result)=>{
                console.log(result);
                res.json(result);
                tempconnection.release();
            });
        }
    });
});

router.get("/customers/:id",(req,res)=>{
    let email=connection.escape(req.params.id);
    const query=`select * from customers where email=${email}`;
    connection.getConnection((error, tempconnection)=>{
        if (error)
        {
            console.log("error has occured");
            tempconnection.release();
    }
        else{
            tempconnection.query(query,(err,result)=>{
                console.log(result);
                res.json(result);
                tempconnection.release();
            });
        }
    });
    
});


router.post("/make",(req,res)=>{
    console.log(req.body)
    
    let sender = connection.escape(req.body.sender);
    let receiver = connection.escape(req.body.receiver);
    let amount = parseFloat(connection.escape(req.body.amount));
    const query=`insert into transactions('sender','receiver','ammount') values (${sender}, ${receiver}, ${amount})`;
    connection.getConnection((error, tempconnection)=>{
        if (error)
        {
            console.log("error has occured");
            tempconnection.release();
    }
        else{
            tempconnection.query(query,(err,result)=>{
                console.log(result);
                res.json({"message":"TRANSACTION COMPLETE"});
                tempconnection.release();
            });
        }
    });
});

router.post('/maketransactions',(req,res)=>{

    let sender = connection.escape(req.body.sender) ;
    let receiver = connection.escape(req.body.receiver) ;
    let ammount = parseFloat(connection.escape(req.body.ammount)) ;
    console.log(sender,receiver,ammount);
    sql = `INSERT INTO transactions ( sender, receiver, ammount) VALUES (${sender}, ${receiver}, ${ammount})`;
    connection.getConnection((error,tempcon)=>{

        if(error)
        {
            tempcon.release();
            throw error;
        }
        tempcon.query(sql,(err,result)=>{
        if(err) {
            tempcon.release();
            json.status(200).json({
                "message" : "there is an error occured"
            });
            console.log(err);
        }
        else
        {
            tempcon.release();
            res.status(200).json({
                "message" : "transaction successfull"
            });
        }
        });
    });

    
    
});

router.get('/customers/:id',(req,res)=>{

    let email = connection.escape(req.params.id);
 //   console.log(email);
    let sql =  `SELECT * FROM customers where email = ${email}`;

    connection.getConnection((error,tempcon)=>{

        if(error)
        {
            tempcon.release();
            throw error;
        }
        else
        {tempcon.query(sql,(err,result)=>{
            if(err) throw err;
            else
            {
                
                tempcon.release();
              //  console.log(result);
                res.json(result);
            }
        });}

    });

    
});
module.exports=router;