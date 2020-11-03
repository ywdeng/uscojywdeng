var express = require('express');
var path = require('path');

var app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.get("/", function (req, res) {
    var filePath = path.join(__dirname, 'Default.html');
    res.sendFile(filePath, function (err) {
        console.log(err);
    });
});
var port = 3000;
app.listen(port, function () {
    console.log("Listening on port " + port);
});