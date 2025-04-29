// Fade-In effect for sections
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".cuisine-section");
    sections.forEach(function (section, index) {
      setTimeout(function () {
        section.style.opacity = 1;
      }, index * 500); // Stagger the fade-in effect
    });
  });
  