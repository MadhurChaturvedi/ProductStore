const mognoose = require("mongoose")

const dbConnect = async () => {
    try {
        const connect = await mognoose.connect("mongodb+srv://root:1234@cluster0.gm7fp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", { dbName: "CRUD" })
        console.log("Database connected");
    }
    catch (e) {
        console.log(e.message);
        process.exit(1)
    }
}

module.exports = { dbConnect }