const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log("Mongo Atlas is connected");
    } catch(e) {
        console.log("Mongo Atlas connection error: ", e);
    }
};

module.exports = connectDB;