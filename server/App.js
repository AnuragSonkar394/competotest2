

import dotenv from "dotenv";
import mongoose from "mongoose";
import { Express } from "express";

const app = express();
dotenv.config({ path: './config.env'});

require('./db/conn');

app.use(express.json());

app.use(require('./routers/auth'));
const PORT = process.env.PORT || 5000;

if(process.env.NODE_ENV==="production"){
    app.use(express.static("client/build"));
    app.get("*",(req,res)=>{res.sendFile(path.resolve(__dirname,"client","build","index.html"))});

}
app.listen(PORT,()=>{
    console.log(`running on port nso $(PORT)`);
})