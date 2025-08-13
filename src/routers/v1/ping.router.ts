import express from 'express';
import { pingHandler } from '../../controllers/ping.controllers';


const pingRouter = express.Router();

pingRouter.get('/', pingHandler); // Using the pingHandler controllers to handle the root of pingRouter

pingRouter.get('/ping', (req, res) => {
    res.send('Pong!') ;
});


export default pingRouter;

