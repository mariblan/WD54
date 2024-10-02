const getProducts = async (req, res) => {
  res.send("Products get");
};
const createProduct = async (req, res) => {
  res.send("Products post");
};

export { getProducts, createProduct };
