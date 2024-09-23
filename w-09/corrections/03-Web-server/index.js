import http from "http";
import {
  createFileWithMessage,
  deleteFileByName,
} from "./controllers/filesControllers.js";
import { create } from "domain";

const handleRequest = (req, res) => {
  const { url, method } = req;
  console.log(url, method);
  const pathFile = /^\/files\/[A-Za-z0-9\-\_]+$/;
  if (url === "/files") {
    if (method === "POST") {
      let body = "";

      req.on("data", (chunk) => {
        body += chunk;
      });
      req.on("end", () => {
        const newFile = JSON.parse(body);
        console.log("newFile", newFile);
        if (!newFile.message) {
          res.statusCode = 400;
          return res.end("Message is required");
        }
        createFileWithMessage(newFile.message);
        res.statusCode = 201;
        return res.end("File created successfully");
      });
    }
  }
  if (pathFile.test(url)) {
    if (method === "GET") {
    }
    if (method === "DELETE") {
      const fileToDelete = `${url.split("/")[2]}.txt`;
      console.log("fileToDelete", fileToDelete);
      deleteFileByName(res, fileToDelete);
    }
  }
  return console.log("Invalid request");
};
const server = http.createServer(handleRequest);

const port = 3000;

server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
