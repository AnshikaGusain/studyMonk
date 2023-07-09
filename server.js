const express = require('express');
// const mysql = require('mysql2');
const ejs = require("ejs");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

app.set("view engine", "ejs");
app.use(express());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));



app.get('/',(req,res)=>{
    res.render("home");
})
app.get('/login',(req,res)=>{
    res.render("login");
})
app.get('/register',(req,res)=>{
    res.render("register");
})
app.get('/candidateSearch',(req,res)=>{
    res.render("CandidateSearch");
})

app.listen(3000,()=>{
    console.log("Server is running");
})
