const express = require('express');
const port = 8000;
const app = express();
const path = require('path')

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/',express.static(path.join(__dirname,'public')))
app.use('/api',require('./routes/api').route)

app.listen(port,(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log(`your app is running at port ${port}`);
    }
})