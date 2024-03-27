const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/bulb_on", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "bulb_on.png"));
});

app.get("/bulb_off", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "bulb_off.png"));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
