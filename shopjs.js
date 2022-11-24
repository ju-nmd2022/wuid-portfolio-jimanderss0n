/*https://www.youtube.com/watch?v=XZdI7p0lE4w*/
let hammerCollected;
const hammeritemid = document.getElementById("hammeritemid");
function coin_toss() {
  var image = new Array("s-l400.jpg", "51bcZy+HZpL._AC_.jpg");
  var show_random_image = Math.floor(Math.random() * image.length);
  console.log(show_random_image);
  document.getElementById("coin_flip").src = image[show_random_image];
  if (show_random_image === 0) {
    hammeritemid.style.visibility = "visible";
  } else if (show_random_image === 1) {
    alert("Try Again");
  }
  hammerCollected = true;
  saveToSessionStorage();
}
function saveToSessionStorage() {
  sessionStorage.hammerCollected = hammerCollected;
}

function readFromSessionStorage() {
  hammerCollected = sessionStorage.hammerCollected === "true";
}

window.addEventListener("load", function () {
  readFromSessionStorage();

  if (hammerCollected === true) {
    hammeritemid.style.visibility = "visible";
  }
});

/*https://stackoverflow.com/questions/55442477/make-text-appear-disappear-on-button-click*/
function toggleText() {
  var text = document.getElementById("demo");
  if (text.style.display === "none") {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}
