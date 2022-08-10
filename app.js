const express=require('express')
const path = require('path');
const genarator=require('generate-password');
let port= process.env.PORT||80;


//Genarator



//Express App 

const app=express();

app.use('/static', express.static('static'));

app.set('view engine', 'pug');

app.set('views', path.join(__dirname, 'views'));

app.get('/',(req,res)=>{
    let pass=genarator.generate({length:15,numbers:true,symbols:false});
    res.status(200).render('index',{pass});
})



app.listen(port)