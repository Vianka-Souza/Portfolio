// Loader
window.onload = function () {
  const loader = document.getElementById("loader");
  loader.style.display = "none";
};

// Dark/Light Mode Toggle
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
});
