// const Item = require('./models/todoItems');
const User = require('../models/user');

exports.createUser=async (req, res) => {
  console.log("🔥 createUser called with body:", req.body);
  try {
    console.log(req.body);
    // const user = new Item(req.body);
    const user = new User(req.body);  //url for cloudinary
    console.log("Saving user now...");
    const savedUser = await user.save();
    console.log("reunnign this");
    if (!res.headersSent) {                 // ✅ guard
      console.log("✅ Sending success response");
      return res.status(201).json(savedUser);
    }
  //  return  res.status(201).json(savedUser);
  
  } catch (error) {
    console.log("hi");
    return res.status(400).json({ message: error.message });
  }
};


