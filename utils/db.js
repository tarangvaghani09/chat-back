// MongoDB connection
const mongoose = require("mongoose");

// mongoose.connect('mongodb://localhost:27017/chat-app', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// });


const URI = process.env.MONGODB_URI;

const connectDb = async () => {
  try {
    console.log("🔗 [db] connecting with URI:", URI);
    await mongoose.connect(URI,{
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("connect to db");
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(0);
  }
};

module.exports = connectDb;
