// JavaScript source code
const express = require('express')
const app = express();
var root = '/Users/chris/source/repos/SampleForms'
/*app.get('/', (req, res) => {
    res.send('Hello World!')
});*/

app.get('/', function (req, res) {
    res.sendFile(root + '/views/Home.html');
});

app.listen(8000, () => {
    console.log('Example app listening on port 8000!')
});
