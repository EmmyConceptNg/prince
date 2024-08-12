import Blog from "../models/Blog.js"; // Import the Blog model

// Get all blogs
export const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 }).populate('author'); // Fetch all blogs, sorted by creation date (newest first)
    res.status(200).json({blogs}); // Send the blogs as a JSON response
  } catch (error) {
    res.status(500).json({ message: "Error fetching blogs", error }); // Handle any errors
  }
};
export const getBlog = async (req, res) => {
  try {
    const blog = await Blog.findOne({_id : req.params.id}).populate('author'); 
    res.status(200).json({blog}); // Send the blogs as a JSON response
  } catch (error) {
    res.status(500).json({ message: "Error fetching blogs", error }); // Handle any errors
  }
};

// Create a new blog
export const createBlogs = async (req, res) => {
  try {
    const { title, category, content, userId } = req.body;
    const image =
      process.env.SERVER_URL +
      "/images/" +
      req.file.filename.replace(/\\/g, "/");

    const newBlog = new Blog({
      title,
      category,
      content,
      image,
      author: userId,
    });

    await newBlog.save(); // Save the new blog to the database
    const blogs = await Blog.find().sort({ createdAt: -1 }).populate("author");
    res.status(201).json({blogs}); // Respond with the newly created blog
  } catch (error) {
    res.status(500).json({ message: "Error creating blog", error }); // Handle any errors
  }
};
