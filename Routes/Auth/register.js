import express from "express";
import bcrypt from "bcrypt";
import { userModel } from "../../database/models.js";
import { transporter,mailOptions } from "./mail.js";

const registerRouter = express.Router();

//api for registering/creating a user


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
        //Sending an email using nodemailer when creating a user
        await transporter.sendMail({
            ...mailOptions,
            to: email,
            subject: "Registration Successfull",
            text: `Hi, 
            You have successfully registered. 
            Please verify your registration,
           `,
          });

        res.send({ msg: "User Created Successfully for registration",hashedPassword});

    }
    catch (err) {
        console.log(err);
        res.status(500).send({ msg: "Error Occured while registering a user" });
    }
})


export default registerRouter;