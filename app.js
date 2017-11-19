const express = require('express');
const path = require('path');
const app = express();

let api = require('./server/routes/api.js');

app.set('view engine', 'html');
app.engine('html', function (path, options, callbacks) {
  fs.readFile(path, 'utf-8', callback);
});

app.use(express.static(path.join(__dirname, 'client')));

app.use('/api',api);

app.listen('3000',()=>{
    console.log('server running at 3000');
});

module.exports = app;

