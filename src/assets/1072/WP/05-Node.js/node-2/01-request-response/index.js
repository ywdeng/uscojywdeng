var express = require('express');
var app = express();

function home(request, response) {
    response.send("歡迎光臨");
}
app.get("/", home);

var port = 3000;
function logger() {
    console.log("Listening on port " + port);
}
app.listen(port, logger);
