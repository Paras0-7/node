const express = require('express');
const path = require('path')
const PORT = 3000;
const app = express();

const router = express.Router();



app.use((req,res,next)=>{
    console.log('Called before request');
    console.log(res.statusCode)
    next();
})

app.use(express.json())
app.get("/", (req,res)=>{

    // console.log('request')
    
   res.sendFile(path.join(__dirname,'public','1.jpg'))
})

app.post('/',(req,res)=>{
    console.log(req.body)
    res.json({
        name:'Paras',
        title:'A3',
        project:'Atlassian'
    });
})
app.listen(PORT,()=>{
    console.log('Server listening to me')
})
