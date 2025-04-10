// تمييز الصفحة الحالية في شريط التنقل
window.onload = function() {
  let currentPage = window.location.pathname.split("/").pop(); // الحصول على اسم الصفحة الحالية
  let navLinks = document.querySelectorAll('nav ul li a');

  navLinks.forEach(link => {
    if(link.getAttribute('href') === currentPage) {
      link.style.color = "#5865F2"; // تغيير اللون لتحديد الصفحة النشطة
      link.style.fontWeight = "bold"; // جعل النص عريض
    }
  });

  // إضافة إشعار عند الانتقال بين الصفحات
  alert("Welcome to Inferno Mena! You're now visiting the page.");
};
