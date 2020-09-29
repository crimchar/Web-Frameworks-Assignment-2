import express from 'express';
import path from 'path';
import { User, userArray } from '../models/userObj';
const userRouter = express.Router();

userRouter.post("/", (req,res,next)=>{
    if(userArray.find(i => i.userID === req.body.userID)){
        res.status(209).send('That user ID is already present');
    }
    else{
        if(req.body.userID != "" && req.body.fname != "" && req.body.lname != "" && req.body.email != "" && req.body.password != ""){
            let newUser = new User(req.body.userID, req.body.fname, req.body.lname, req.body.email, req.body.password);
            userArray.push(newUser);
            res.status(201).send(newUser);
        }
        else{
            res.status(400).send('You are missing a field');
        }
    }
});

userRouter.patch("/:ID", (req,res,next)=>{

    for(var i = 0; i < userArray.length; i++){
        if (userArray[i].userID === req.params.userID){
            if (req.body.userID != "" && req.body.fname != "" && req.body.lname != "" && req.body.email != "" && req.body.password != ""){
                userArray[i].fname = req.body.fname;
                userArray[i].lname = req.body.lname;
                userArray[i].email = req.body.email;
                userArray[i].password = req.body.password;
                res.status(200).send(userArray[i]);
                break;
            }
            else{
                res.status(400).send('You are missing a field');
                break;
            }
        }
        else{
            res.status(404).send('That user ID is not present, cannot patch');
        }
    }
    
});

userRouter.delete('/:ID', (req,res,next)=>{

    for(var i = 0; i < userArray.length; i++){
        if (userArray[i].userID === req.params.ID){
            userArray.splice(i, 1);
            res.sendStatus(200);
            break;
        }
        else{
            res.status(404).send('That user ID is not present, cannot delete');
        }
    }
});
    
userRouter.get('/:ID', (req,res,next)=>{

    for(var i = 0; i < userArray.length; i++){
        if (userArray[i].userID === req.params.ID){
            res.status(200).send(userArray[i]);
            break;
        }
        else{
            res.status(404).send('That user ID is not present, cannot find');
        }
    }
});

export {userRouter};