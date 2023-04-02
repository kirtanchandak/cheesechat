import express from "express";
import bodyParser from "body-parser";
import { createServer } from "http";
import { Server } from "socket.io";
import { v4 as uuidv4 } from "uuid";

const app = express();

//socket-io server
const httpServer = createServer(app);
const options = {
  /* ... */
};
const io = new Server(httpServer, options);

httpServer.listen(3000);

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("pages/index");
});

app.get("/generate-room-id", (req, res) => {
  let roomId = uuidv4();
  res.status(200).send({ roomId: roomId });
});

app.get("/cheesechat", (req, res) => {
  io.sockets.emit("create", req.query.roomId);
  res.render("pages/chatpage");
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
