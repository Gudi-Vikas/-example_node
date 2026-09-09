import express from 'express';

const app = express();
app.get('/',(req,res)=>{
    console.log("welcome to my app! from server.js");
    res.send("welcome to my app! from server.js")
})

app.listen(3000, ()=>{
    console.log("welcome to the port 3000 from server.js");
    
})