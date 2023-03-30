import express from "express";
import bodyParser from "body-parser";
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("pages/index");
});

app.post("/join-room", (req, res) => {
  console.log(req.body);
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
