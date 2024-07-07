const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    selectedSeats: [],
    show: {
        type:mongoose.ObjectId,
        ref:'show'
    },
    email:{
  type: String,
  required:true
 },
 phone:{
    type:String,
    required:true
 }

});

  const Booking = mongoose.model('Booking', bookingSchema);
  module.exports = Booking