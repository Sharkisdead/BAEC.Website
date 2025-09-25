
function navigateTo(page) {
  window.location.replace(page);
}


document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("homeBtn").addEventListener("click", () => navigateTo("index.html"));
  document.getElementById("aboutBtn").addEventListener("click", () => navigateTo("Aboutus.html"));
  document.getElementById("tvBtn").addEventListener("click", () => navigateTo("Televisons.html"));
});