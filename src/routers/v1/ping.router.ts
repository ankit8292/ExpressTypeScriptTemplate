import express from 'express';
import { pingHandler } from '../../controllers/ping.controllers';
// import { validateRequestBody } from '../../validators';


const pingRouter = express.Router();

pingRouter.get('/', pingHandler); // Using the pingHandler controllers to handle the root of pingRouter

pingRouter.get('/health', (req, res) => {
    res.send('Pong!') ;
});


export default pingRouter;

