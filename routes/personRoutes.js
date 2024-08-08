const  express=require('express');
const router=express.Router();
const Person=require('./../models/Person');

//Post route to add person
router.post('/',async(req,res)=>{
    try{
       const data=req.body

       //create new document using the Mongooose model
       const newPerson=new Person(data);

       //save the new person to the database
       const  response = await newPerson.save();
        console.log('data saved');
        res.status(200).json(response);
      }
    catch(err){
      console.log(err);
      res.status(500).json({error:'Internal Server Error'})
    }
})
// Get route to get the person
router.get('/',async(req,res)=>{
    try{
      const data = await Person.find();
      console.log('data fetched');
          res.status(200).json(data);
    }catch(err){
      console.log(err);
        res.status(500).json({error:'Internal Server Error'})
  
    }
  })

  router.get('/:workType',async(req,res)=>{
  
    try{
      const workType=req.params.workType ;//extract the worktype from url parameter
     if(workType=='chef'|| workType=='manager'|| workType== 'waiter'){
        
      const response=await Person.find({work:workType})
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
  router.put('/:id',async(req,res)=>{
    try{
      const personId = req.params.id;  //extract id from url
      const updatedPersonData = req.body;

      const response = await Person.findByIdAndUpdate(personId,updatedPersonData,{
        new:true,    //return the updated document
        runValidators:true, //run mongoose validation
        })
        if(!response){
            return res.status(404).json({error:'Person not found'});
        }
      console.log('data updated');
      res.status(200).json(response);
     }catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server Error'})
    

    }
  })


  router.delete('/:id',async(req,res)=>{
    try{
      const personId = req.params.id;  //extract id from url
      
      const response = await Person.findByIdAndDelete(personId);
        if(!response){
            return res.status(404).json({error:'Person not found'});
        }
      console.log('data delete');
      res.status(200).json({message:'person Deleted Successfully'});
     }catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server Error'})
    

    }
  })
 
module.exports=router;  