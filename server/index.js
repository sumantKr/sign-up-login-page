import  express from 'express';
import  cors from 'cors';
import  mongoose from 'mongoose';
import { defaultGet } from './Controllers/default.js';
import userRouter from './Routes/users.js';
const app=express();

const PORT= process.env.PORT||5000
const MONGO_URL='mongodb+srv://SumantKumar:qwertyuiop1234567890@cluster0.gjctq.mongodb.net/user_Cluster?retryWrites=true&w=majority'
//middlewares
app.use(cors());
app.use(express.json({extended:true,limit:"30mb"}))
app.use(express.urlencoded({extended:true,limit:"30mb"}))
app.use('/user',userRouter);
//mongoDB
mongoose.connect(
    MONGO_URL,
    {
    useNewUrlParser:true,
    useUnifiedTopology:true
    })
    .then(()=>{
        console.log('MongoDB setup and connected')
    })
    .then(()=>{
        app.listen(PORT,()=>{
            console.log("running at "+PORT);
        })
    })
    .catch((e)=>{
        console.log(e.message);
    })
mongoose.set('useFindAndModify',false);

//routes
app.get('/',defaultGet);



