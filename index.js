document.addEventListener("DOMContentLoaded", function() {
  const toggleButton = document.getElementById("toggle-button");
  const divElements = document.querySelectorAll(".lightTheme");
  const black = document.querySelectorAll(".black");

  toggleButton.addEventListener("change", function() {
    if (this.checked) {
      document.body.style.backgroundColor = "white";
      document.querySelector(":root").style.setProperty("--bg-color", "hsl(225, 100%, 98%)");
      divElements.forEach(function(element) {
        element.style.backgroundColor = "hsl(225, 100%, 98%)";
      });
      black.forEach(function(element) {
        element.style.color = "black";
      });
    } else {
      document.body.style.backgroundColor = "";
      document.querySelector(":root").style.setProperty("--bg-color", "");
      black.forEach(function(element) {
        element.style.color = "";
      });
      divElements.forEach(function(element) {
        element.style.backgroundColor = "";
      });
    }
  });
});
