import express from "express";
import dotenv from "dotenv"
import cors from "cors";
import router from "./Router.js";
dotenv.config();

const app = express();
const port = process.env.PORT ?? 3000;

app.use(cors());
app.use(express.json());

// app.get("/api", (_req, res) => {
//     res.send("I demand your request. Now!");
// });
app.use("/api", (router));

app.listen(port, () => console.log(`Server is running on port: ${port}`));

