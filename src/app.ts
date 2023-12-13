import dotenv from "dotenv";
dotenv.config();
import express, { Response, Request, json } from "express";
import cors from "cors";
import helmet from "helmet";
import sequelize from "./db";

const app = express();

app.use(cors());
app.use(helmet());
app.use(json());
const port = process.env.port ?? 5000;

sequelize
  .sync()
  .then(() => console.log("database connected successfully"))
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
