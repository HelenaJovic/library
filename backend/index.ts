import express, { Express } from "express";
import cors from "cors";
import userController from "./controllers/user-controller";
import bookController from "./controllers/book-controller";
import userBookController from "./controllers/user-book-controller"


const app: Express = express();

const corsOptions = {
  origin: "http://localhost:8080",
};

app.use(cors(corsOptions));
app.use("/users", userController);
app.use("/books",bookController);
app.use("/user_book",userBookController);



const PORT: number = 8081;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
