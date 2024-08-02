const express = require("express");
const app = express();
const cors = require("cors");

const authRoute = require("./src/routes/authRoute");
const resumeRoute = require("./src/routes/resumeRoute");
const connectToDB = require("./src/config/connect");
const protect = require("./src/middlewares/authMiddleware");

connectToDB();
const port = 8080;

app.use(
  cors({
    origin: ["https://resumifyx.vercel.app/"],
    methods: ["POST", "GET", "DELETE", "PUT"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.use("/api/user", authRoute);
app.use("/api/resume", protect, resumeRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
