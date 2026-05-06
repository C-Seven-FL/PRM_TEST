import 'dotenv/config';
//import path from 'node:path';
//import { fileURLToPath } from 'node:url';
import express from 'express';
import cors from 'cors';
import { StatusCodes } from "http-status-codes";
//import mongoose from 'mongoose'; 

import featureRoutes from "./api/feature/feature.routes.js";

//const __filename = fileURLToPath(import.meta.url);
const PORT = Number(process.env.PORT || 4002);
const clientOrigin = process.env.CLIENT_URL || 'http://localhost:3000';
//const isDirectRun = process.argv[1] && path.resolve(process.argv[1]) === path.resolve(__filename);

export const app = express();

app.use(
    cors({
        origin: [clientOrigin, 'http://localhost:3000'],
        credentials: true,
    }),
);

app.use(express.json());

// Zdravotní kontrola servisu
app.get('/health', (_req, res) => {
    res.json({
        service: 'feature_service', 
        status: StatusCodes.OK
    });
});

// Zapojení našich rout
app.use('/feature', featureRoutes); 

(async () => {
    //await initSeq();
    app.listen(PORT, () => {
        console.log(`feature_service listening on ${PORT}`);
    });
})();

//const mongoUri = "mongodb+srv://vitek:heslo@bookio.hmpwvvl.mongodb.net/?appName=Bookio";
//mongoose.connect(mongoUri)
//    .then(() => console.log('Úspěšně připojeno do MongoDB'))
//    .catch(err => console.error('Chyba připojení do MongoDB:', err));

//export function startFeatureService() {
//    return app.listen(port, () => {
//        console.log(`feature_service listening on ${port}`); 
//    });
//}

//if (isDirectRun) {
//    startFeatureService(); 
//}