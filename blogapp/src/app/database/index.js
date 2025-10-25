import mongoose from "mongoose";

const connectDB = async () =>{
     const connectionURL = `mongodb://localhost:27017/nextDB` ;

     mongoose.connect(connectionURL)
     .then(()=>{console.log('MONGO DB Connected')})
     .catch((err)=>{
          console.log("error at db connection and error is ",err);
          process.exit(1);
     });
}

export default connectDB;