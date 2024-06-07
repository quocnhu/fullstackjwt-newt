/**ES6*/ 
import dotenv from 'dotenv';
import express from 'express';
const app = express()
import bodyParser from 'body-parser';
//External files imported to server backend
import configViewEngine from './config/viewEngine.js'
import initWebRoutes from './route/web.js'
import {poolsql} from '../src/config/db.js'
//Initializing config
configViewEngine(app);

//Initializing body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Initializing dotenv
dotenv.config();

//Initializing route
initWebRoutes(app)

//Database connection
poolsql.getConnection((err, connection) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
  } else {
    console.log("MySQL connected!");
  }
});

const port = process.env.PORT || 1176
app.listen(port, () => {
  console.log(`>>>SERVER BACKEND JWT IS LISTENING PORT: ${port}`)
})


