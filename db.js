const mongoose=require('mongoose'); 

//define the MongoDB connection URL
const mongoURL='mongodb://localhost:27017/hotels'

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