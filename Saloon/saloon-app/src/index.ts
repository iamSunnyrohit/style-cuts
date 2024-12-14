import express from 'express';
import { ServiceController } from './controllers/service.controller';
import { StylistController } from './controllers/stylist.controller';
import mongoose from 'mongoose';
import 'dotenv/config'
import morgan from 'morgan';
import { AppointmentController } from './controllers/appointment.controller';
import bodyParser from 'body-parser';
const cors = require('cors')

async function main() {

    await mongoose.connect(process.env.MONGO_URI as string, { autoIndex: true, autoCreate: true })

    const app = express();
    app.use(morgan('combined'))
    app.use(cors())
    app.use(bodyParser.json())
    
    const controllers = [
        ServiceController,
        StylistController,
        AppointmentController
    ];
    controllers.map(_=> new _(app));
    
    app.listen(parseInt(process.env.PORT as string) || 3600, process.env.HOST as string, () => {
        console.log(`Server listening at ${process.env.PORT}`)
    });
}

main().catch(err=>console.log(err));