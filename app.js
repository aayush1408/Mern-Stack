const express = require('express');
const app = express();

let api = require('./server/routes/api.js');
app.use('/api',api);


app.listen('3000',()=>{
    console.log('server running at 3000');
});

module.exports = app;

