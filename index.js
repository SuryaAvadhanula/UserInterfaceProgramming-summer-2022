const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 5000; // default
require("dotenv").config();
const mongoose = require("mongoose");


const userRoutes = require('./server/routes/user');
const postRoutes = require('./server/routes/post');
const commentRoutes = require('./server/routes/comment');



mongoose.connect(process.env.dbURL)
  .then(console.log("DB Connected!!"))
  .catch(error => console.log(error));

app
    .use(express.json())
    
    .use( express.static(__dirname + '/client/build'))

    .get('/', (req, res) => res.sendFile(path.join(__dirname, '/client/build', 'index.html')))

    .use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
        res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
        next(); 
    })

    .use('/user', userRoutes)
    .use('/post', postRoutes)
    .use('/comment', commentRoutes)

    .listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
  });


