var mongoose=require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/accounts_db", function(err, data){
    if (err) {
        console.log('error connecting to to db ')
        
      } else {
        console.log('connected to db')
      }
});

module.exports  = mongoose