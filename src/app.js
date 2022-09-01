const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');

const req_path = path.join(__dirname, "../public")
const partials_path = path.join(__dirname,"../templates/partials")
const view_path = path.join(__dirname,"../templates/views")

app.set('view engine','hbs');
app.set('views',view_path);

hbs.registerPartials(partials_path);

app.use(express.static(req_path));

app.get("",(req,res)=>{
    res.render('index');
});

app.get("/about",(req,res)=>{
    res.render("about");
});

app.get("/weather",(req,res)=>{
    res.render("weather");
});

app.get("*",(req,res)=>{
    res.render("404errorpage");
});

app.listen(4000,()=>{
    console.log(`Listening...${4000}`);
});