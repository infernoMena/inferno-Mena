// عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", function () {
  // زر الديسكورد
  const discordBtn = document.querySelector(".discord-btn");

  // حدث عند الضغط على الزر
  discordBtn.addEventListener("click", function (e) {
    e.preventDefault(); // نمنع الرابط من الفتح الفوري

    // رسالة تأكيد للمستخدم
    const go = confirm("🔥 هل أنت مستعد تنضم إلى مجتمع CrossFire؟");

    // إذا وافق، نفتح الرابط
    if (go) {
      window.open(this.href, "_blank");
    }
  });
});
