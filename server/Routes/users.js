import express from 'express'
import { getUsers,signUpUser,loginUser } from '../Controllers/user.js';

const userRouter=express.Router();

userRouter.get('/get-user',getUsers);
userRouter.post('/sign-up-user',signUpUser);
userRouter.get('/login-user',loginUser);


export default userRouter;