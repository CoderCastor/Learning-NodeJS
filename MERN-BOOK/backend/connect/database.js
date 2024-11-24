const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const connect = await mongoose.connect("mongodb+srv://tejasshinde935:7499728755@castorcluster.u6ytj.mongodb.net/taskApp");
        console.log(`MongoDB Connected: ${connect.connection.host}`)
    } catch (err) {
        console.log(err)
        process.exit(1);
    }
}

module.exports = connectDB