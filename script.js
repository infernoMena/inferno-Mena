// script.js

document.addEventListener("DOMContentLoaded", function () {
  const discordBtn = document.querySelector(".discord-btn");

  discordBtn.addEventListener("click", function (e) {
    e.preventDefault(); // عشان مايروحش على طول
    const go = confirm("هل أنت متحمس؟ 🔥 سيتم تحويلك الآن إلى Discord!");
    if (go) {
      window.open("https://discord.gg/kyBTtBxf", "_blank");
    }
  });
});
