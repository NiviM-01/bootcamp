import express from 'express'
import mongoose from 'mongoose';
import morgan from 'morgan';
// import adminRouter from './controllers/admin'
import cors from 'cors'
import dotenv from 'dotenv'
import signin from './routes/userAuthencation.js'
import NewCoures from './routes/addedCoures.js';
import CourseContent from './routes/addCourseContent.js';
import NewEntrollment from './routes/addNewEntroll.js'


const app = express();

dotenv.config()
// body parser
app.use(express.json())

// third party middleware
app.use(morgan('dev'))
app.use(cors());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });

// app.use('/api',adminRouter)
app.use('/admin',signin)
app.use('/api',NewCoures)
app.use('/api',CourseContent)
app.use('/api',NewEntrollment)




// db connection
mongoose.connect(process.env.MONGODB).then(()=>{
    console.log('connected to database');
}).catch((err)=>{
    console.log(err);
})
// app.use('/signin',(req,res,next)=>{signup
// next})
app.listen(4000,()=>{
    console.log('running successfully');
})

