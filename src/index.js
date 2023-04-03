import express from "express";
const app = express();

//socket-io server
import { createServer } from "http";
const httpServer = createServer(app);

import bodyParser from "body-parser";
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//for using ejs files
app.set("view engine", "ejs");
//for using static files
app.use(express.static("public"));

import { Server } from "socket.io";
const io = new Server(httpServer, {
  /* ... */
});

//for generating random room id
import { v4 as uuidv4 } from "uuid";

app.get("/", (req, res) => {
  res.render("pages/index");
});

app.get("/generate-room-id", (req, res) => {
  let roomId = uuidv4();
  res.status(200).send({ roomId: roomId });
});

app.get("/cheesechat", (req, res) => {
  res.render("pages/chatpage");
});

// io.on("socket", (socket) => {});

httpServer.listen(5000, () => {
  console.log("Server is running on port 5000");
});
