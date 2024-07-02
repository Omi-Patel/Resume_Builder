const express = require("express");
const app = express();

const authRoute = require("./src/routes/authRoute");
const resumeRoute = require("./src/routes/resumeRoute");
const connectToDB = require("./src/config/connect");
const protect = require("./src/middlewares/authMiddleware");

connectToDB();
const port = 8080;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.use("/api/user", authRoute);
app.use("/api/resume", protect, resumeRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
