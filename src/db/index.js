import mongoose from "mongoose";

const mongoConnection = async () => {
  try {
    let mongoDBConnectionInstanse = await mongoose.connect(
      `${process.env.MONGO_URI}/${process.env.DB_NAME}`,
    );
    console.log(
      "MongoDB Connected to HOST : ",
      mongoDBConnectionInstanse.connection.host,
    );
  } catch (err) {
    console.log("MongoDB Connection Error : ", err);
    process.exit(1);
  }
};

export default mongoConnection;
