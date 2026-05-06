import express from "express";
import cookieParser from 'cookie-parser';
import cors from "cors"
import routes from './src/routes/index';

import 'dotenv/config';

const app = express()

const PORT = process.env.RESERVATION_SERVICE_PORT || 3004;
const CLIENT_URL = process.env.CLIENT_URL || "http://localhost:3001";

app.use(cors({
    origin: CLIENT_URL,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"]
}))

app.use(express.json())
app.use(cookieParser());
app.use(express.urlencoded({extended:true}));


(async () => {
   // await initSequence();

    app.use('/',routes);

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`)
    })

})();