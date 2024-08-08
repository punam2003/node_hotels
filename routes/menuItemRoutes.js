const  express=require('express');
const router=express.Router();
const MenuItem=require('./../models/MenuItem');


//Post method to add menuItem
router.post('/',async(req,res)=>{
    try{
      const data=req.body
    
       const newMenu=new MenuItem(data);
      const response=await newMenu.save();
      console.log('data saved');
      res.status(200).json(response);
  
    }catch(err){
      console.log(err);
      res.status(500).json({error:'Internal Server Error'})
  
    }
  })
  
  //Get router to get Menu item
  router.get('/:taste',async(req,res)=>{
    try{
        const taste=req.params.workType ;//extract the taste from url parameter
       if(taste=='sweet'|| taste=='spicy'|| taste== 'sour'){
          
        const response=await Person.find({tastetype:taste})
        console.log('response fetched');
        res.status(200).json(response);
    
       }else{
         res.status(404).json({error:'Invalid work type'});
       }
    
    
    }catch(err){
      console.log(err);
        res.status(500).json({error:'Internal Server Error'})
  
    }
  })

  
module.exports=router; 