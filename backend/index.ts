import express, { Express } from "express";
import cors from "cors";
import usersAPI from "./API/usersAPI";


const app: Express = express();

const corsOptions = {
  origin: "http://localhost:8080",
};

app.use(cors(corsOptions));
app.use("/users", usersAPI);



const PORT: number = 8081;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
