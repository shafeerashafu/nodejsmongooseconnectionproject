import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "kit.23.19bec102@gmail.com",
      pass: "egaefrpcdvmaezrw",
    },
  });
  
  const mailOptions = {
    from: "kit.23.19bec102@gmail.com",
    to: "shafeerazahur3@gmail.com",
    subject: "Email Testing for B49WEENG",
    text: "Was it Easy or Tough",
  };

  //await transporter.sendMail(mailOptions);


  export {mailOptions,transporter};