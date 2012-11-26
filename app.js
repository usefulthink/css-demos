var express = require('express'),
    path = require('path');

express()
    .use(express.static(path.join(__dirname, 'public')))
    .use(express.directory(path.join(__dirname, 'public')))
    .listen(3000);

