const express = require('express');
const app = express();
var path = require('path');
const port = 3005;
console.log(__dirname)
app.use('/',express.static(__dirname));
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
app.get('/grid', function(req, res) {
    res.sendFile(path.join(__dirname + '/grid.html'));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

