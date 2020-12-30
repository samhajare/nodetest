
const express = require('express');
const app = express();
const path = require('path');
const port = 8080;

 const statcPath = path.join(__dirname,'../public');
app.use(express.static(statcPath));


app.get("",(req,res) => {

    res.send("welcome to thapa tech channel");
});

app.get("/weather",(req,res) => {
  res.send("welcome to thapa tech channel weather page");
});

app.get("*",(req,res) => {
    res.send("Oops 404 error page");
  });

app.listen(port,()=>{

    console.log(`listing port at ${port}`);
});