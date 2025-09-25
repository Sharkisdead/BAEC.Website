

function showTab(tabName) {

  document.getElementById("homeSection").style.display = "none";
  document.getElementById("aboutSection").style.display = "none";
  document.getElementById("televisionSection").style.display = "none";


  document.getElementById(tabName).style.display = "block";
}

window.onload = function() {
  showTab("homeSection");
};
