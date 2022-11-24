const plank = document.getElementById("plankid");
let plankCollected;

plank.addEventListener("click", () => {
  const plankitemid = document.getElementById("plankitemid");
  plankitemid.style.visibility = "visible";
  plank.style.visibility = "hidden";
  alert("This could be a usefull piece");
  plankCollected = true;
  saveToSessionStorage();
});

function saveToSessionStorage() {
  sessionStorage.plankCollected = plankCollected;
}

function readFromSessionStorage() {
  plankCollected = sessionStorage.plankCollected === "true";
}

window.addEventListener("load", function () {
  readFromSessionStorage();

  if (plankCollected === true) {
    plankitemid.style.visibility = "visible";
    plank.style.visibility = "hidden";
  }
});

const note = document.getElementById("noteid");
note.addEventListener("click", () => {
  alert("You need a hammer to get this plank up, go to the shop");
});
