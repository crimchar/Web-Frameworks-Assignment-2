import express from 'express';
import path from 'path';
import { userArray } from '../models/userObj';
const usersRouter = express.Router();

usersRouter.get("/Users", (reg,res,next)=>{
    res.send(userArray).status(200);
})

usersRouter.get("/", (req,res,next)=>{
    res.sendFile(path.join(process.cwd(),'views','help.html'));
})


export {usersRouter};