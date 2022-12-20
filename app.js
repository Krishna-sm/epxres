const express= require('express')
const app=express();
const port=process.env.PORT || 5000;

app.get("/",(req,res)=>{
    res.setHeader('Content-Type', 'application/json').json({"name":"Krishna Agrawal"})
})
app.listen(port,()=>{
    console.log(`the app is listen at ${port}`)
})