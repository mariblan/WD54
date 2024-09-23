const posts = [
  { id: 1, title: "Post 1" },
  { id: 2, title: "Post 2" },
];

const getAllPosts = async (req, res) => {
    try{
     res.json(posts);
    }catch(err){
        res.status(500).json({message: err.message});
    }
 
};

const createPost = async (req, res) => {
  console.log(req.body);
  const newPost = req.body;
  posts.push(newPost);
  res.statusCode(200).json(newPost);
};

const getOnePost = async (req, res) => {
  const { id } = req.params;
  console.log(req.params.id);
  const post = posts.find((post) => post.id === Number(id));
  console.log(post);
  res.json(post);
};
const updateOnePost = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const post = posts.find((post) => post.id === Number(id));
  res.json(post);
};
const deleteOnePost = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const post = posts.find((post) => post.id === Number(id));
  res.json(post);
};

export { getAllPosts, createPost, getOnePost, updateOnePost, deleteOnePost };
