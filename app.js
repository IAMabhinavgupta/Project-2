// First we make file 'app.js'. This is our main file where we include or link every file of this project. 
// After this we make install 'express' and it make file 'package.json' and 'node_modules' in our project folder.
// After this we make install 'pug' and it make file 'package-lock.json' in our project folder.
// After this we make file 'views' inside our project folder , where we store all our template files like all pug files and inside it we make html files in the pug , and we make 'index.pug' inside 'views' files.
// After that we make a file 'static' inside our project folder , where we store all those files which will be publicly available.
// 

const express = require("express");
const path = require("path");
const fs = require("fs");
const { static } = require("express");
const app = express();
const port = 8000;

// Here we serve all 'EXPRESS SPECIFIC STUFF FILES'.
app.use('/static',express.static('static'));
app.use(express.urlencoded());

// Here we use 'PUG SPECIFIC STUFF FILES'.
app.set('view engine','pug') // Set the template engine as pug.
app.set('views',path.join(__dirname,'views'))// Set the views directory.

// Here we put all our linked files [Means that we use only 'ENDPOINT.']
// Here we change the 'home.pug' from 'index.pug' , because we want to serve same file but on different location and on 'pug file'.
app.get('/',(req,res)=>{
  res.status(200).render('home.pug');
})

// This 'ENDPOINT' as a purpose of using pug files.
app.get('/contact',(req,res)=>{
  res.status(200).render('contact.pug');
})

// Here we 'START THE SERVER'.
app.listen(port,()=>{
  console.log(`The server started successfully on port ${port}`);
})