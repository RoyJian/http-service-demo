function show_hide() {
  var login = document.getElementById("container1");
  var signup = document.getElementById("container2");
  var copyright = document.getElementById("copyright");

  if (login.style.display === "none") {
    login.style.display = "block"; //lonin出現
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    signup.style.display = "none"; //signup消失
    copyright.style.margin = "200px 0px 0px 0px";
  } else {
    login.style.display = "none"; //login消失
    signup.style.display = "block"; //signup出現
    signup.style.visibility = "visible";
    copyright.style.margin = "200px 0px 0px 0px";

    document.getElementById("fullname").value = "";
    document.getElementById("username2").value = "";
    document.getElementById("password2").value = "";
    document.getElementById("comfirm_password").value = "";
  }
}
function login(e) {
  e.preventDefault();
  let icon;
  fetch("/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user: document.getElementById("username").value,
      password: document.getElementById("password").value,
    }),
  })
    .then((response) => {
      icon = response.status == 200 ? "success" : "error";
      return response.json();
    })
    .then((data) => {
      Swal.fire({
        title: data.msg,
        text: "You clicked the button!",
        icon: icon,
      });
    })
    .catch((error) => console.error(error));
}
