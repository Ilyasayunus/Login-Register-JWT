import express from "express";
import db from "./config/Databases.js";
import router from "./routes/index.js";
const app = express();

try {
    await db.authenticate();
    console.log('Database Connected...');
    
} catch (error) {
    console.log(error);
    
}

app.use(express.json());
app.use(router);

app.listen(5000, ()=> console.log('Server running at port 5000'));