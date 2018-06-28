var express=require("express");
var mongoose=require("../dbConnection")

var getAccounts =  function(){

  var test=  mongoose.model("accounts").find({}, {"_id": false})
  return test
}



module.exports = {

    getAccounts : getAccounts

}

