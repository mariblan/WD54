import http, { request } from "http";

const posts = [
  {
    id: "1",
    title: "First post",
    content: "Hello world!",
  },
  {
    id: "2",
    title: "Second post",
    content: "My second post!",
  },
];

const requestHandler = (req, res) => {
  //   res.statusCode = 200;
  //   res.setHeader("Content-Type", "application/json");
  //   res.end(JSON.stringify({ message: "Hello World" }));

  const { url, method } = req;
  const singlePostRegex = /^\/posts\/[0-9a-zA-Z]+$/;
  if (url === "/") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    return res.end(JSON.stringify({ message: "Hello World" }));
  }
  if (url === "/posts") {
    if (method === "GET") {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      return res.end(JSON.stringify(posts));
    }
    if (method === "POST") {
      let body = "";
      req.on("data", (chunk) => {
        body += chunk.toString();
      });
      req.on("end", () => {
        const newPost = { id: crypto.randomUUID(), ...JSON.parse(body) };
        posts.push(newPost);
        res.statusCode = 201;
        res.setHeader("Content-Type", "application/json");
        return res.end(JSON.stringify(newPost));
      });
      return console.log("Invalid method");
    }
    return res.end();
  }
  if(singlePostRegex.test(url)) {
    if(method === "GET"){
        return console.log((`GET on ${url}`));
    }
    if(method === "PUT"){
        return console.log((`PUT on ${url}`));
    }
    if(method === "POST"){
        return console.log((`POST on ${url}`));
    }
    if(method === "DELETE"){
        return console.log(`DELETE on ${url}`);
    }
    
  }
};

const server = http.createServer(requestHandler);

const port = 3000;

server.listen(port, () =>
  console.log(`Server running at http://localhost:${port}/`)
);
