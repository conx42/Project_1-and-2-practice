const express = require("express");
const path = require("path"); //path.join() ==> eiii function taa use korar jonno path taaa import korechi
const app = express();
const port = 80;

// For serving static files
app.use('/static', express.static('static'));

// Set the template engine as pug
app.set('view engine','pug');
  
// Set the views directory
app.set('views', path.join(__dirname,'views'));

// Our pug demo end point
app.get("/demo",(req,res)=>{
    res.status(200).render('demo', { title: 'Hey Zico', message: 'Hello there and thanks for telling me how to use pug!' });
});




app.get("/", (req, res) => {
    res.status(200).send("This is home page my first express app with Harry");
});
app.get("/about", (req, res) => {
    res.send("This is my about page first express app with Harry");
});
app.post("/about", (req, res) => {
    res.send("This is my post request about page first express app with Harry");
});
app.get("/this", (req, res) => {
    res.status(404).send("This page is not found in my website.zico.pro");
});

app.listen(port, () => {
    console.log(`The application started succesfully on port ${port}`);
});


//  72 is the Last video source of this code 