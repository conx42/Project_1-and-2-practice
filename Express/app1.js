const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const port = 80;

//EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static'));//for serving static files
app.use(express.urlencoded()); //Website aa User er deoa input express obdhi aanar jonno eii syntax 

// PUG SPECIFIC STUFF
app.set('view engine', 'pug');//Set the template engine as pug
app.set('views', path.join(__dirname, 'views'));//Set the views directory


//END_POINTS
//eta website thaka syntax taa neoa express er template engine pug set korar jonno:-- https://expressjs.com/en/guide/using-template-engines.html
app.get('/', (req, res) => {
    const con = "This is the best content on the internet so far so use it wisely";
    const params = { 'title': 'CHESS is the best game', "content": con };
    res.status(200).render('index.pug', params);
});

app.post('/', (req,res) =>{
    name1 = req.body.name       //name1 is just a variable name
    age = req.body.age          //age is just a variable age
    gender = req.body.gender    //gender is just a variable gender
    address = req.body.address  //address is just a variable address
    more = req.body.more        //more is just a variable more

    let outputToWrite = `The name of the client is "${name1}", "${age}" years old, "${gender}", residing at "${address}". More about him/her: "${more}"`
    fs.writeFileSync('output.txt', outputToWrite); //output.txt name err ekta file nije thaka baniye tateyy outputToWrite err information store kore debey|


    console.log(req.body);
    const params = {'message': 'Your form has been submitted sucessfully'};
    res.status(200).render('index.pug',params);
})

//START THE SERVER
app.listen(port, () => {
    console.log(`The application started sucessfully on port ${port}`);
});


/* Whole Source code */
// const express = require("express");
// const path = require("path");
// const fs = require("fs");
// const app = express();
// const port = 80;

// // EXPRESS SPECIFIC STUFF
// app.use('/static', express.static('static')) // For serving static files
// app.use(express.urlencoded())

// // PUG SPECIFIC STUFF
// app.set('view engine', 'pug') // Set the template engine as pug
// app.set('views', path.join(__dirname, 'views')) // Set the views directory
 
// // ENDPOINTS
// app.get('/', (req, res)=>{
//     const con = "This is the best content on the internet so far so use it wisely"
//     const params = {'title': 'PubG is the best game', "content": con}
//     res.status(200).render('index.pug', params);
// })

// app.post('/', (req, res)=>{
//     name = req.body.name
//     age = req.body.age
//     gender = req.body.gender
//     address = req.body.address
//     more = req.body.more

//     let outputToWrite = `the name of the client is ${name}, ${age} years old, ${gender}, residing at ${address}. More about him/her: ${more}`
//     fs.writeFileSync('output.txt', outputToWrite)
//     const params = {'message': 'Your form has been submitted successfully'}
//     res.status(200).render('index.pug', params);

// })


// // START THE SERVER
// app.listen(port, ()=>{
//     console.log(`The application started successfully on port ${port}`);
// });
