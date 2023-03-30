$(".submit-btn").click(function () {
  let data = {
    username: $("#username").val(),
    roomid: $("#roomid").val(),
  };
  if (data.name === "" || data.roomid === "") {
    alert("Please enter a username and roomid");
    return;
  } else {
    $.post("/join-room", data, function (res) {
      console.log(res);
    });
  }
});
