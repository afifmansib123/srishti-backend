const mongoose = require("mongoose");

const BillSchema = mongoose.Schema(
  {
    customerName: { type: String, require: true },
    customerRealName: { type: String, require: true },
    customerPhoneNumber: { type: String, require: false },
    paymentMode: { type: String, require: true },
    cartItems: { type: Array, require: true },
    subTotal: { type: Number, require: true },
    tax: { type: Number, require: true },
    totalAmount: { type: Number, require: true },
    checked: { type: Boolean, require:true,  default:false},
    completed : { type: Boolean, require:true,  default:false},
    customersidetoken : {type : String, require: false},
    waitertoclose: { type: String, require: false },
    customerAddress : { type: String, require: false }
  },
  { timestamps: true }
);
const Bill = mongoose.model("bills", BillSchema);
module.exports = Bill;
