const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
// Parser for  json
app.use(express.json());

app.use(
  cors({
    origin: "http://127.0.0.1:3000/",
  })
);

app.get("/", (req, res) => {
  res.json({ ok: true, message: "Received request" });
});

app.post("/login", (req, res) => {
  console.log(req);
  res.json({ ok: true, message: "login page sucess" });
});

app.get("/logout", (req, res) => {
  console.log(req);
  res.json({ ok: true, message: "login page sucess" });
});

app.get("/logout", (req, res) => {
  console.log(req);
  res.json({ ok: true, message: "login page sucess" });
});

// Started a server at port
app.listen(process.env.PORT, () => {
  console.log(`Listening at ${process.env.PORT}`);
});
