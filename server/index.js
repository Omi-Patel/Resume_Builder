const express = require("express");
const app = express();
const cors = require("cors");

const authRoute = require("./routes/authRoute");
const resumeRoute = require("./routes/resumeRoute");
const connectToDB = require("./config/connect");
const protect = require("./middlewares/authMiddleware");

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
