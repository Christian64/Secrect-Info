import { config } from "dotenv";
config();
import "./db";

import express from "express";
import cors from "cors";
import helmet from "helmet";
import indexRoutes from "./routes";

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", indexRoutes);

app.listen(4004, () => console.log("The server is working!"));
