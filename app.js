const express = require('express');
const path = require('path');

//
const app = express();

//levantnando servidor 
app.listen(3030, ()=>{
    console.log('El servidor esta corriendo')
})

//Static Files
app.use(express.static(path.join(__dirname,'public')));


//Routes
app.get('/', function(req, res){
    let indexPath = path.join(__dirname,'./views/index.html')
    res.sendFile(indexPath)
});

app.get('/babbage', function(req,res){
    let babbagePath = path.join(__dirname,'./views/babbage.html');
    res.sendFile(babbagePath)
});

app.get('/berners-lee', function(req, res){
    let bernersPath = path.join(__dirname, './views/berners-lee.html');
    res.sendFile(bernersPath)
});

app.get('/clarke', function(req, res){
    let clarkePath = path.join(__dirname, './views/clarke.html');
    res.sendFile(clarkePath)
});

app.get('/hamilton', function(req,res){
    let hamiltonPath = path.join(__dirname, './views/hamilton.html')
    res.sendFile( hamiltonPath)
});

app.get('/hopper', function(req,res){
    let hopperPath = path.join(__dirname, './views/hopper.html');
    res.sendFile(hopperPath)
});

app.get('/lovelace', function(req,res){
    let lovePath = path.join(__dirname, './views/lovelace.html');
    res.sendFile( lovePath);
});

app.get('/turing', function(req, res){
    let turingPath = path.join(__dirname, './views/turing.html');
    res.sendFile( turingPath)
})