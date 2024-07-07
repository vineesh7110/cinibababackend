const express = require('express')
const router = express.Router()
const Language = require('../models/language')


router.get('/languages', async (req, res, next) => {
    try{
      const languages =await Language.find({});
      res.status(200).json(languages)
    }
    catch(error){
      res.status(500).send('error occured')
    }
  })

module.exports = router