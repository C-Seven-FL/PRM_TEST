import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import {StatusCodes} from "http-status-codes";

import serviceRoutes from "./api/service/service.routes.js"
import userRoutes from "./api/user/user.routes.js"
import categoryRoutes from "./api/category/category.routes.js"


//import DBService from "./services/db.service.js";

const PORT = process.env.USER_SERVICE_PORT || 4001;
const CLIENT_URL = process.env.CLIENT_URL || "http://localhost:3001";
const app = express();

app.use(cors({
  origin: CLIENT_URL,
  credentials: true,
  allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json());

app.use('/user', userRoutes);
app.use('/service', serviceRoutes);
app.use('/category', categoryRoutes);

/*
async function initSeq(){
    await DBService.getInstance().connect();
    console.log("Database service initialized");
}
*/

(async () => {
    //await initSeq();
    app.listen(PORT, () => {
        console.log(`user_service listening on ${PORT}`);
    });
})();




