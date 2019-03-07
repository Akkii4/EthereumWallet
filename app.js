var express = require("express");  
var app = express();  

app.use(express.static("public"));

app.get("/", function(req, res){
	res.sendFile(__dirname + "/public/html/index.html");
})

app.listen(3000,function(){
	console.log(`Server is Running at http://localhost:3000`);});