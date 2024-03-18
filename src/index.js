import mongoConnection from "./db/index.js";
import dotenv from "dotenv";
import app from "./app.js";
dotenv.config({
  path: "./.env",
});
mongoConnection()
  .then(() => {
    app.on("error", (err) => {
      console.log("Error :", err);
    });
    app.listen(process.env.PORT || 5000, () => {
      console.log(`App is running at ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(`Error :`, err);
  });
