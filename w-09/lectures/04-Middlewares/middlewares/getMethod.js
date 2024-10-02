const validateMethod = (req, res, next) => {
  if (req.method === "GET") {
    console.log("Method is GET");
    next();
  } else {
    res.status(405).send("Method not allowed");
  }
};

export default validateMethod;
