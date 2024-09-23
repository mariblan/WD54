const generalGet = (req, res) => {
  res.json({ message: "Hello World!" });
};

const generalPost = (req, res) => {
  res.json({ message: "This a post request!" });
};

export { generalGet, generalPost };