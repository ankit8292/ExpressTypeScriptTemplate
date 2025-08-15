import { NextFunction, Request, Response } from "express";
import fs from 'fs'; // Importing the file system module to read files
import 
{ 
    // AppError,
    // InternalServerError ,
     NotFoundError
} from "../utils/errors/app.error";


export const pingHandler = async(req: Request, res: Response, next:NextFunction) => {
   // res.send('Hi Ping Pong !');
    // res.status(200).json({
    //     message: 'Ping Pong!',
    //     success: true
    // });
    // fs.readFile('sample.txt', (err, data)=>{
    //     if(err){
    //         next(err) // Pass the error to the default middleware error handle. Above express 5 it hnadles automatically.
    //     }
    // })

    // await fs.readFileSync('sample.txt', 'utf8'); // Synchronously read the file
        // res.status(200).json({
        //     message: 'Ping Pong!',
        //     success: true
        // });
     //   throw new NotFoundError('File not found')
    try{
        await fs.readFileSync('sample.txt', 'utf8'); // Synchronously read the file
        res.status(200).json({
            message: 'Ping Pong!',
            success: true
        });
    }
    catch(error){
        // const appError : AppError = {
        //     statusCode: 500,
        //     message: 'Error reading file',
        //     name: 'FileReadError',
        // };
        //throw appError; // Throwing a custom error
        throw new NotFoundError('File not found'); // Throwing a custom error
    }
}