const mongoose=require('mongoose'); 
require('dotenv').config();

//define the MongoDB connection URL
// const mongoURL= process.env.MONGODB_URL_LOCAL;
 const mongoURL  =process.env.MONGODB_URL;
//set up MongoDB connection
mongoose.connect(mongoURL,{
     useNewUrlParser:true,
     useUnifiedTopology:true
})

const db=mongoose.connection;

//Define event listeners for database connection
db.on('connected',()=>{
    console.log('Connected to mongoDB server  ')
});

db.on('error',(err)=>{
    console.log('MongoDB connection error:',err)
    });

db.on('disconnected',()=>{
        console.log('MongoDb disconnected  ')
    });   


//export database connection
module.exports=db;    