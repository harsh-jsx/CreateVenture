const express = require("express");
const cors = require("cors");
const ServiceRoutes = require("./routes/ServiceRoutes");

const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use("/api/services", ServiceRoutes);

// Routes
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
