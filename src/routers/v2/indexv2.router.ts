import express from 'express';


const v2Router = express.Router();

v2Router.get('/', (req, res) => {
    res.send('Pong from v2!');
});

export default v2Router;