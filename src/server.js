require("dotenv").config();
const express = require("express");
const healthRoutes = require("./routes/healthRoutes");

const app = express();
app.use(express.json());

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Backend API is Live 🚀🚀🚀");
});

app.use("/api", healthRoutes);

app.listen(PORT, () => {
  console.log(`server is running at port ${PORT}`);
});
