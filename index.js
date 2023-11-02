//console.log('hello every one');
const express = require("express")
const mongoose = require("mongoose")
const app = express()

//DB connection 
mongoose
.connect("mongodb+srv://prat_k9:prateek2003@cluster0.e8ktyvf.mongodb.net/"
)
.then(()=>{
    console.log("Data base is nandesh succesfully")
})
.catch((err)=>{
    console.log(err,"Something is went wrong")
});


//test api
app.get("/test",(req,res)=>{
    res.send("hello everyone , tis is test api");
});
app.listen(5000,()=>{
    console.log("Server is running on port 5000");
});