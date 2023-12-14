import dotenv from "dotenv";
dotenv.config();
import express, { json } from "express";
import cors from "cors";
import helmet from "helmet";
import { DATABASE } from "./db";
import SectorRouter from "./Sector/router";
import UserRouter from "./User/router";

const app = express();

app.use(cors());
app.use(helmet());
app.use(json());
app.use(SectorRouter);
app.use(UserRouter);
const port = process.env.port ?? 5000;

DATABASE();

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
