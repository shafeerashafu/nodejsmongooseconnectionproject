import mongoose from "mongoose";

const localUri="mongodb://127.0.0.1:27017/Userdata";



const connectToDb = async() => {
    try {
        await mongoose.connect(localUri);
        console.log("Connected to MongoDB");
      } catch (err) {
        console.log("Error connecting to MongoDB", err);
        process.exit(1);
      }
};

export default connectToDb;



