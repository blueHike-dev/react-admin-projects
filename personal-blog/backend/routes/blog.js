const Blog = require("../models/Blog");
const router = require("express").Router();

//Create new blog
router.post("/", async (req, res) => {
  const newBlog = new Blog(req.body);
  try {
    const savedBlog = await newBlog.save();
    res.status(200).json(savedBlog);
  } catch (error) {
    res.status(500).json(error);
  }
});

//Update existing blog
router.put("/:id", async (req, res) => {
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(
      req.params.blogId,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedBlog);
  } catch (error) {
    res.status(500).json(error);
  }
});

//Delete a blog
router.delete("/:id", async (req, res) => {
  try {
    const deletedBlog = await Blog.findByIdAndRemove(req.params.blogId);
    res.json(deletedBlog);
  } catch (error) {
    res.status(500).json(error);
  }
});

//Get a single blog
router.get("/:id", async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    res.status(200).json(blog);
  } catch (error) {
    res.status(500).json(error);
  }
});

//Get all blogs
router.get("/", async (req, res) => {
  try {
    const { query } = req.query;
    if (query) {
      const blogs = await Blog.find({ $text: { $search: query } });
      res.status(200).json(blogs);
      // const blogs = await Blog.find();
    } else {
      const blogs = await Blog.find();
      res.status(200).json(blogs);
    }
    // res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ error: "Internal  Error" });
  }
});

module.exports = router;
