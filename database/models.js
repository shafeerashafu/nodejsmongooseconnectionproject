import mongoose from "mongoose";
const usersSchema=new mongoose.Schema({
    userId: {
        type: "string",
        required: true,
      },
      name: {
        type: "string",
        required: true,
      },
      email: {
        type: "string",
        required: true,
      },
      dob: {
        type: "string",
        required: true,
      },
    //   imageUrl: {
    //     type: "string",
    //     required: true,
    //   },
    //   password: {
    //     type: "string",
    //     required: true,
    //   },
    //   isAccountVerified: {
    //     type: "boolean",
    //     required: true,
    //   },
});

const userModel=new mongoose.model("users",usersSchema,"userschemadata");

//user -> name

//usersSchema -> created  schema name

//userschemadata -> db collection name

export {userModel};