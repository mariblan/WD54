import express from "express";
import dotenv from "dotenv";
import { generalGet, generalPost } from "./controllers/generalControllers.js";
import {
  getAllPosts,
  createPost,
  getOnePost,
  updateOnePost,
  deleteOnePost,
} from "./controllers/postsControllers.js";

const app = express();
dotenv.config();
const port = process.env.BACKEND_URL || 3000;

app.use(express.json());

app.route("/").get(generalGet).post(generalPost);
// app.get("/", generalGet);
// app.post("/", generalPost);
app.route("/posts").get(getAllPosts).post(createPost);
// app.get("/posts", getAllPosts);
// app.post("/posts", createPost);
app
  .route("/posts/:id")
  .get(getOnePost)
  .put(updateOnePost)
  .delete(deleteOnePost);
// app.put();
// app.delete();

app.listen(port, () =>
  console.log(`Server is running at http://localhost:${port}`)
);
