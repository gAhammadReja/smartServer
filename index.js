import express from 'express';
import Connection from './db.js';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import router from './route.js'
// // import path from 'path';
// import { fileURLToPath } from 'url';
// import { dirname } from 'path';

// import nodemailer from 'nodemailer'
dotenv.config();
const dbusername = process.env.DB_USERNAME;
const dbpassword = process.env.DB_PASSWORD;
// const baseUrl = process.env.BASE_URL;

Connection(dbusername,dbpassword);



const app = express()
const port = process.env.PORT || 3001;

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

//middle wayer to public folder

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());
app.use(express.json())
app.use('/', router);


app.get('/',(req,res)=>{
    res.send("Hi")
})

app.post('/login', (req, res) => {
    const { registrationId, userType, phoneNumber } = req.body;
  let query;
    if (userType === "student") {
    query = `students?registrationId=${registrationId}&phoneNumber=${phoneNumber}`;
    res.send(query)
  }else if (userType === "admin" && registrationId==="lotib3333@gmail.com" && phoneNumber=="7501728816") {
    res.send("welcomeToAdminPanel");
  }else if(userType === "teacher"){
    res.send("Welcome Sir"+registrationId);
  }else{
    res.send("invalid");
  }
  });




  //listen 404
  app.use((req, res) => {
    res.status(404);
  });
  

app.listen(port, () => console.log(`Example app listening on port ${port}!`))