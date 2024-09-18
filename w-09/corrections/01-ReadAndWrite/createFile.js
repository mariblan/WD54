import * as fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__dirname);

const createFileWithMessage = (message) => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();
  const fileName = `${hour}-${minute}-${second}.txt`;
  const directory = path.join(__dirname, `${year}-${month}-${day}`);

  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory);
    console.log("Directory created successfully");
  }

  const filePath = path.join(directory, fileName);
  fs.writeFileSync(filePath, message);
};

// createFileWithMessage("Hello World!");

console.log(process.argv);
const message = process.argv[3];
console.log(message);

createFileWithMessage(message);