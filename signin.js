const forms = document.querySelector(".forms"),
  pwShowHide = document.querySelectorAll(".eye-icon"),
  links = document.querySelectorAll(".link");

pwShowHide.forEach((eyeIcon) => {
  eyeIcon.addEventListener("click", () => {
    let pwFields =
      eyeIcon.parentElement.parentElement.querySelectorAll(".password");

    pwFields.forEach((password) => {
      if (password.type === "password") {
        password.type = "text";
        eyeIcon.classList.replace("bx-hide", "bx-show");
        return;
      }
      password.type = "password";
      eyeIcon.classList.replace("bx-show", "bx-hide");
    });
  });
});

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    forms.classList.toggle("show-signup");
  });
});
button(signin).addEventListener("click", () => {
  const email = document.getElementById("nemail").value;
  const password = document.getElementById("npassword").value;
  localStorage.getItem("email");
  localStorage.getItem("password");
  if (nemail == email && npassword == password) {
    alert("Đăng Nhập Thành Công");
    setTimeout(() => {
      location.href = "index.html";
    });
  } else {
    alert("Mật khẩu hoặc Email không trùng khớp");
  }
});
