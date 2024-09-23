import express from "express";
import { createFileWithMessage, deleteFileByName } from "./filesControllers.js";

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/files", createFileWithMessage);
app.delete("/files/:fileName", deleteFileByName);

app.listen(port, () => {
  console.log("Server is running at http://localhost:3000");
});
