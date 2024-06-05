import express from "express";
import router from "./routes.js";
import cors from "cors"
import cookieParser from "cookie-parser";
const app = express();
const PORT = 8000;


app.use(cors());
app.use(cookieParser());

app.use(express.json());


// Include your router middleware
app.use(router);

// Start the server and fix the typo in the log message
app.listen(PORT, () => {
    console.log(`Connected at http://localhost:${PORT}`);
});
