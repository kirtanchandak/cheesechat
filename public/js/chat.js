let socket = io();

let username = "";
let roomId = "";

$(document).ready(function () {
  const params = new URLSearchParams(window.location.search);
  username = params.get("username");
  roomId = params.get("roomId");

  socket.emit("join-room", username, roomId);
});

socket.on("user-connected", (name) => {
  let html = `<div class="row">
      <div class="col-12 col-md-12 col-lg-12">
        <p>${name} joined the room!!</p>
      </div>
    </div>`;

  $("#chat-area").append(html);
});

$(".send-msg").click(function () {
  let msg = $("#chat-msg").val();
  if (msg === "") {
    alert("Message is required");
    return;
  } else {
    socket.emit("message", username, roomId, msg);
    let html = `<div class="row">
        <div class="col-12 col-md-12 col-lg-12">
          Me: ${msg}
        </div>
      </div>`;
    $("#chat-area").append(html);
    $("#chat-msg").val("");
  }
});

socket.on("recieve-message", (name, msg) => {
  if (username !== name) {
    let html = `<div class="row">
        <div class="col-12 col-md-12 col-lg-12">
          ${name}: ${msg}
        </div>
      </div>`;
    $("#chat-area").append(html);
  }
});
