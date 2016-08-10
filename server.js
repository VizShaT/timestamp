var express = require("express");
var app = express();

app.get('/', function(req, res){
    res.send("Hello Kikit");
});

app.listen(8080, function(){
    console.log("Example app listen on 8080.");
})

