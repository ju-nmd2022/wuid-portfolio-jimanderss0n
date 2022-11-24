let plankCollected;
let screwCollected;
let fixed = document.getElementById("fixedbridge");

function readFromSessionStorage() {
  screwCollected = sessionStorage.screwCollected === "true";
  plankCollected = sessionStorage.plankCollected === "true";
}

window.addEventListener("load", function () {
  readFromSessionStorage();
  if (plankCollected === true && screwCollected === true) {
    screwitemid.style.visibility = "visible";
    fixedid.style.visibility = "visible";
  }
});
