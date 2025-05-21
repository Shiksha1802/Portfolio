document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  // Toggle navigation on mobile
  toggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // Smooth scroll to section
  window.scrollToSection = function (id) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Handle form submission if form exists
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Message sent!");
    });
  }
});

