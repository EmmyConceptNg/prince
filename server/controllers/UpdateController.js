import Update from "../models/Update.js";

export const createOrUpdateContent = async (req, res) => {
  const { content } = req.body;

  console.log(content)
  try {
    // Check if there is any existing content
    const existingContent = await Update.findOne();

    if (existingContent) {
      // If content exists, update it
      existingContent.content = content;
      await existingContent.save();
      res
        .status(200)
        .json({ success: "Content Updated", update: existingContent });
    } else {
      // If no content exists, create a new one
      const newUpdate = await Update.create({ content });
      await newUpdate.save();
      res.status(201).json({ success: "Content Created", update: newUpdate });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export const getContent = async (req, res) => {
  try {
    // Retrieve the content
    const content = await Update.findOne();

    if (content) {
      // If content exists
      res.status(200).json({ success: "Content Retrieved", content });
    } else {
      // If no content is found
      res.status(404).json({ error: "No Content Found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};