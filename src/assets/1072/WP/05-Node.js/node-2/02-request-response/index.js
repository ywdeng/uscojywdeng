var express = require('express');
var app = express();

app.get("/", function(req, res) {
    res.send("歡迎光臨!!");
});

var port = 3000;
app.listen(port, function() {
    console.log("Listening on port " + port);
});
