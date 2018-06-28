var express=require("express");
// Load MongoDB Driver
var cors = require('cors')
var accountRoute=require("./routes/accountRoute")
var fs=require("fs");
var app=express();


app.use(express.static("public"))
app.use(cors())

app.use("/accounts",accountRoute);

var files_arr=fs.readdirSync(__dirname+"/models")
files_arr.forEach(function(file){
  require(__dirname+"/models/"+file);
});


app.listen(8090, function(){
  console.log("listening 8090")
});
