import express from "express";
import router from "./routes/routes.js";
import cors from "cors";
import DBConnection from "./database/db.js";
const app = express();
const Port = 8000;

app.use(cors());
app.use("/", router);

DBConnection();
app.get("/", async (req, res) => {
  res.send("this is the server ");
});
app.listen(Port, () => {
  console.log("server is running on port 8000");
});
