const mongoose = require("mongoose");

const connectDB = async () => {
    const conn = await mongoose.connect(process.env.MONGODB_URI)
    // console.log("conn", conn.connections);
    console.log(`MONGODB_URI connected at ${conn.connection.host}`.cyan.underline.bold);
}

module.exports = connectDB;