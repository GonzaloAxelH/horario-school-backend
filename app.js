require('dotenv').config();
const express = require('express');
const cors = require('cors')
const { dbConnect } =require('./config/mongo');
const { json } = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(json())

//Rutas
app.get('/',(req,res)=>{
    res.send('hello')
    console.log('home')
})

app.use('/api/1.0',require('./app/routers/'))

dbConnect();
app.listen(PORT,()=>{
    console.log('Server is running in port ',PORT)
})



