var express = require('express');
var router = express.Router();
var mongoose = require("mongoose")
var user =  require("../model/users")
var product =  require ("../model/product")
var upload = require("../middleware/upload")
require('dotenv').config();

const URL =  process.env.URL

mongoose.connect(URL).then(()=>console.log('db connected'))

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/adduser',upload.single("image"),async(req,res)=>{
  try {

    const step  =await user(req.body)
    if(req.file){
      step.image = req.file.location
    }
    step.save((err,data)=>{
      if(err){
      res.json(err)
      }else{
        res.status(200).json(data)
      }
    });
  } catch (error) {
    console.log(error)
  }
})


router.post('/addproduct',upload.single("image"),async(req,res)=>{
  try {

    const step  =await product(req.body)
    if(req.file){
      step.image = req.file.location
    }
    step.save((err,data)=>{
      if(err){
      res.json(err)
      }else{
        res.status(200).json(data)
      }
    });
  } catch (error) {
    console.log(error)
  }
})

router.get('/getuser',async(req,res)=>{

  let result =  await user.find()
 if(result){
      res.status(200).json(result)
  }else{
    res.status(400)
  }
})
router.get('/finduser/:id',async(req,res)=>{

  let result =  await user.findById(req.params.id)
 if(result){
      res.status(200).json(result)
  }else{
    res.status(400)
  }
})
router.get('/findproduct/:id',async(req,res)=>{

  let result =  await product.findById(req.params.id)
 if(result){
      res.status(200).json(result)
  }else{
    res.status(400)
  }
})


router.get('/getproduct',async(req,res)=>{

  let result =  await product.find()
 if(result){
      res.status(200).json(result)
  }else{
    res.status(400)
  }
})

router.put('/edituser/:id',upload.single("image"),async(req,res)=>{

  const value = req.body
  if(req.file){
    value.image = req.file.location
  }
  const result = await user.replaceOne({_id:req.params.id},value)
  if(result){
    res.status(200).json(result)
  }else{
    res.status(400)
  
  }
})

router.put('/editproduct/:id',upload.single("image"),async(req,res)=>{
   
  const value = req.body
  if(req.file){
    value.image = req.file.location
  }
  const result = await product.replaceOne({_id:req.params.id},value)

  if(result){
    res.status(200).json(result)
  }else{
    res.status(400)
  }
})

router.delete('/deleteuser/:id',async(req,res)=>{
  try{
    const step = await user.findByIdAndDelete(req.params.id)

    if(step){
      res.status(200).json('deleted successfully')
    }else{
      res.status(400).json("deletion failed")
    }
  }catch(err){
    console.log(err)
  }
})

router.delete('/deleteproduct/:id',async(req,res)=>{
  try{
    const step = await product.findByIdAndDelete(req.params.id)

    if(step){
      res.status(200).json('deleted successfully')
    }else{
      res.status(400).json("deletion failed")
    }
  }catch(err){
    console.log(err)
  }
})
module.exports = router;
