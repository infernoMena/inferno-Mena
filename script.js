// script.js

document.addEventListener("DOMContentLoaded", function () {
  const discordBtn = document.querySelector(".discord-btn");

  discordBtn.addEventListener("click", function (e) {
    e.preventDefault();
    const go = confirm("🔥 هل أنت جاهز للانضمام إلى مجتمع Inferno؟");
    if (go) {
      window.open(this.href, "_blank");
    }
  });
});
