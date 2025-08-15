import {Request, Response, NextFunction } from "express";
import z from "zod";


export const validateRequestBody = (schema: z.ZodSchema) => {
    return (req: Request, res: Response, next: NextFunction) => {
        try {
            schema.parse(req.body);
            next();
        } catch (error) {
            //res.send("Invalid request body");
            console.log(error);
            res.status(400).json({
                message: "Invalid request body",
            })
        }
    };
}