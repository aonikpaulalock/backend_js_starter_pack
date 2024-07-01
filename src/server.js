import mongoose from "mongoose";
import dotenv from "dotenv";
import app from "./app.js";
dotenv.config();


async function main() {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    app.listen(process.env.PORT, () => {
      console.log(`Example app listening on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}
main();