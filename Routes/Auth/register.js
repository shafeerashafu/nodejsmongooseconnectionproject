import express from "express";
import bcrypt from "bcrypt";
import { userModel } from "../../database/models.js";

const registerRouter = express.Router();

//api for registering/creating a user
// registerRouter.post("/", async (req, res) => {
//     const { body } = req;
//     const { email } = body;

//     try {
//         const existingUser = await userModel.findOne({ email: email });
//         if (existingUser) {
//             res.status(409).send({ msg: "User already exists" });
//             return;
//         }

//         // Encrypting the password
//         const hashedPassword = bcrypt.hashSync(body.password, 10);

//         // Assigning the hashed password to the user object
//         const objectBody = {
//             ...body,
//             userId: Date.now().toString(),
//             password: hashedPassword // Include the hashed password here
//         };

//         const user = new userModel(objectBody);
//         await user.validate();
        
//         // Creating the user with the hashed password
//         await userModel.create(objectBody);

//         console.log("hashedpwd is", hashedPassword);
//         res.send({ msg: "User Created Successfully for registration", ...objectBody });
//     } catch (err) {
//         console.log(err);
//         res.status(500).send({ msg: "Error Occurred while registering a user" });
//     }
// });

registerRouter.post("/",async(req,res)=>{
    const {body}=req;
    const {email} =body;
    try{
        const existingUser= await userModel.findOne({email:email});
        if (existingUser) {
            res.status(409).send({ msg: "User already exists" });
            return;
        }

        //body before encryption
        const objectBody={
            ...body,
            userId:Date.now().toString()
        }
        const user = new userModel(objectBody);
        await user.validate();

        //encrypting the password
        const hashedPassword = bcrypt.hashSync(body.password,10);
        await userModel.create({...objectBody,password:hashedPassword});

        res.send({ msg: "User Created Successfully for registration",hashedPassword});

    }
    catch (err) {
        console.log(err);
        res.status(500).send({ msg: "Error Occured while registering a user" });
    }
})


export default registerRouter;