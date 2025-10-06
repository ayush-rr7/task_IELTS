//backend
const express =  require('express');
const app = express();
const path= require('path');
const mongoose = require('mongoose');
const dotenv =require('dotenv');
const multer =require('multer');
const cors = require('cors');

// app.use(cors({ origin: "http://localhost:5174" }));
app.use(cors());
//load env
dotenv.config();
mongoose.connect(process.env.MONGODB_URI, {
})
  .then(() => console.log("Connected to MongoDB!"))
  .catch(err => console.error("Connection error:", err));


// const authRouter= require('./router/authRouter')
const userRouter= require('./router/userRouter')
// const session = require('express-session');
// const MongoDBStore = require('connect-mongodb-session')(session);



app.set('view engine', 'ejs');


// const store =new MongoDBStore({
//  uri: process.env.MONGODB_URI,
//  collection:'sessions'
// });

app.use(express.urlencoded({ extended: true }));
 app.use(express.json());

   
//    app.use(session({
//    secret: 'your-secret-key',
//    resave: false,
//    saveUninitialized: false,
//    store: store
//  }));

 
app.use((req, res, next) => {
  console.log("➡️ Request received:", req.method, req.url);
  next();
});



//  app.use('/api',authRouter );
 app.use('/api',userRouter );



const PORT=3001;

app.listen(PORT,()=>{
  console.log(`http://localhost:${PORT}`)
})