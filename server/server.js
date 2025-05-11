// PACKAGES
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js"

// DOTENV
dotenv.config(); //calling the env variables

// MONGODB CONNECTION
connectDB(); //calling connectBD from db.js

// REST OBJECT
const app = express(); //

// MIDDLEWARES
const corsOptions = {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE'],
    allowedHeaders: ['Authorization', 'Content-Type'],
};
app.use(cors(corsOptions));
app.use(express.json()); //getting response in json format


// MAIN ROUTE
app.get("", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Welcome to User Management!!"
    });
});

// OTHER ROUTES
app.use("/users", userRoutes)


// PORT
const PORT = process.env.PORT || 8080;

// LISTEN
app.listen(PORT, () => {
    console.log(`Server Running ${PORT}`);
})