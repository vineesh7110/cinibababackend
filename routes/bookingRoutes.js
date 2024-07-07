const express = require('express')
const router = express.Router()
const Booking= require('../models/booking')


router.get('/', async (req, res, next) => {
  
    try{
      const bookings =await Booking.find(req.params, 'selectedSeats');
      res.status(200).json(bookings)
    }
    catch(error){
      res.status(500).send('error occured')
    }
  })

  router.get('/:bookingId', async (req, res, next) => {
    try{
      const booking = await Booking.findById(req.params.bookingId).populate('screen');
      res.status(200).json(booking)
    }
    catch(error){
      res.status(500).send('error occured')
    }
  })


  router.post('/', async (req, res, next) => {
    try{
     const booking = new Booking(req.body)
     await booking.save()
     res.status(201).json(booking)
    }
    catch(error){
      res.status(500).send('error occured')
    }
  })
  router.delete('/:bookingId', async (req, res, next)=>{
    try{
     await Booking.findByIdAndDelete(req.params.bookingId)
     res.status(204).send("deleted")
    }
    catch(error){
      res.status(500).send('booking of reqested ID not found!')
    }
  })

module.exports = router