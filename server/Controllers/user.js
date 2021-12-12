import User from "../models/user.js";


export const getUsers=async(req,res)=>{
    const body=req.body.email;
    try{
        const userSnap=await User.find({
            'email':body
        })
        console.log(userSnap);
        res.status(201).send('get user SAB CHANGA SII!!');
    }
    catch(e){
        res.status(404).send('get user mein LOL hogaya');
    }
    console.log(body);
}

export const signUpUser=async (req,res)=>{
    const {name,email,password}=req.body;
        // console.log('aagye req');
        console.log(req.body);
    try{
        const existingUserDoc=await User.findOne({
            'email':email,
        })
        if(!existingUserDoc){
            const newUser=new User({
                name:name,
                email:email,
                password:password,
               
            })
            await newUser.save();   
            res.status(201).send('user Registered!');
        }
        else{
            res.send('user already exists.Login!!'); 
        }
    }
    catch(e){
        res.status(404).send('try again!!');
    }
}
export const loginUser=async(req,res)=>{
    const {email,password}=req.query;
     console.log(req.query);
    try{
        const  verificationDoc=await User.findOne({
            'email':email
        })
        console.log(verificationDoc);
        
        if(verificationDoc===null)
            res.status(200).send('No user with this email. SignUp!')
        else if(verificationDoc.password!==password)
            res.status(200).send('Wrong password. TRY AGAIN!!');
        else if(verificationDoc.password===password){
            const dataToBeSent={
                name:verificationDoc.name,
                
            }
            res.status(201).send(dataToBeSent);
        }
    }
    catch(e){
        res.status(404).send('try again');
    }
}