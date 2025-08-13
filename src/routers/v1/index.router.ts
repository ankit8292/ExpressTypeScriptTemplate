import express from 'express';
import pingRouter from './ping.router'; // Importing the ping router

const v1Router = express.Router();

v1Router.use('/ping', pingRouter);

export default v1Router;