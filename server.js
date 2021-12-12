const express=require('express');
const bodyParser=require('body-parser');

const app=express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
    //res.send("hello nupur here ");
});

app.post("/",function(req,res){
    
    req.body.submit=Number(req.body.num1)+Number(req.body.num2);
    console.log(req.body.submit);
    res.send("Sum of the two numbers = "+req.body.submit);
    //res.send("hanji done ");
})

app.listen(3000,function(){
    console.log("server is running on port 3000");
});