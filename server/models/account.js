var mongoose=require("../dbConnection")
// register model
var Schema=mongoose.Schema
var accounts=new Schema({
  accountNum:{
    type:String,
    required: true,
    unique: true},
  totalServices:Number,
  totalBill: {
    BillType: String,
    BillValue: Number
    }
})
// ORM
mongoose.model("accounts",accounts)
