const express = require("express");
const app = express();

const authRoute = require("./src/routes/authRoute");
const connectToDB = require("./src/config/connect");

connectToDB();
const port = 8080;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.use("/api/user", authRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
