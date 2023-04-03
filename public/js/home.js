$(".submit-btn").click(async function () {
  let data = {
    username: $("#username").val(),
    roomid: $("#roomid").val(),
  };
  if (data.name === "") {
    alert("username is required");
    return;
  } else {
    if (data.roomid === "") {
      await $.get("/generate-room-id", function (res) {
        data.roomid = res.roomId;
      });
    }
  }
  window.location.href = `/cheesechat?username=${data.username}&roomId=${data.roomid}`;
});
