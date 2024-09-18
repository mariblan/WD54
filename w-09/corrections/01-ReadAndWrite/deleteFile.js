import * as fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__dirname);

const deleteFileByName = (fileName) => {
  if (fs.existsSync(fileName)) {
    fs.unlinkSync(fileName);
    console.log("File deleted successfully", fileName);
  } else {
    console.log("File not found");
  }
};

// deleteFileByName("2024-9-18/16-22-48.txt");

const args = process.argv[3];
console.log(args);

deleteFileByName(args);
