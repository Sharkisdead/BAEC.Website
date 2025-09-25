function navigateTo(page) {
  window.location.href = page; // normal navigation
}

document.addEventListener("DOMContentLoaded", () => {
  const homeBtn = document.getElementById("homeBtn");
  const aboutBtn = document.getElementById("aboutBtn");
  const tvBtn = document.getElementById("tvBtn");
  const powerIcon = document.getElementById("powerIcon");

  if (homeBtn) homeBtn.addEventListener("click", () => navigateTo("index.html"));
  if (aboutBtn) aboutBtn.addEventListener("click", () => navigateTo("Aboutus.html"));
  if (tvBtn) tvBtn.addEventListener("click", () => navigateTo("Televisions.html"));
  if (powerIcon) powerIcon.addEventListener("click", () => navigateTo("index.html"));
});