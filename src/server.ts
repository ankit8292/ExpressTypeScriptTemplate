import express from 'express';
import {serverConfig} from './config';
import v1Router from './routers/v1/index.router';
import v2Router from './routers/v2/indexv2.router';
// import { pingHandler } from './controllers/ping.controllers';
// import pingRouter from './routers/v1/ping.router';

const app = express();

// const PORT :number = 3000;

// app.get('/', (req, res) => {
//     res.send('Welcome to the Express Server!');
// });

// we can use above code also but it is not good practice to append the logic 
// directly in app object because might be in pinghandle function the actual app object can be modified. 
// so we will use router concept to handle the requests that provides frpm express.

// app.use(pingRouter); // middlewaare to handle ping requests

app.use("/api/v1", v1Router); // Use the v1 router for API versioning
app.use("/api/v2", v2Router); // Use the v2 router for API versioning

app.listen(serverConfig.PORT, () => {
    console.log(`Server is running on http://localhost:${serverConfig.PORT}`); // Use PORT from .env or default to 3000
});


