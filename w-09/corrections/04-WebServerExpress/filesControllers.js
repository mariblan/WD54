import * as fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__dirname);

const createFileWithMessage = async (req, res) => {
  const { message } = req.body;

  console.log("message", message);
  const date = new Date();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();
  const fileName = `${hour}-${minute}-${second}.txt`;

  const filePath = path.join(__dirname, fileName);
  fs.writeFileSync(filePath, message);
  res.statusCode = 201;
  return res.end(`File ${fileName} created with message: ${message}`);
};

const deleteFileByName = (req, res) => {
  const { fileName } = req.params;
  const filePath = path.join(__dirname, `${fileName}.txt`);
  console.log("filePath", filePath);
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
    console.log("File deleted successfully", fileName);
    res.statusCode = 200;
    return res.end("File deleted successfully");
  } else {
    res.statusCode = 404;
    return res.end("File not found");
  }
};

export { createFileWithMessage, deleteFileByName };
