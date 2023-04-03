let socket = io();

let username = "";
let roomId = "";

$(document).ready(function () {
  const params = new URLSearchParams(window.location.search);
  username = params.get("username");
  roomId = params.get("roomId");

  socket.emit("join-room", username, roomId);
});

socket.on("user-connected", (username) => {
  let html = `<div class="row">
      <div class="col-12 col-md-12 col-lg-12">
        <p>${username} joined the room!!</p>
      </div>
    </div>`;

  $("#chat-area").append(html);
});
