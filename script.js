window.onload = function() {
  var selectElement = document.getElementById("choix");
  selectElement.addEventListener("change", afficherImage);
  var images = imageContainer.getElementsByTagName("img");

  for (var i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
}

function afficherImage() {
  var choix = this.value;
  var imageContainer = document.getElementById("imageContainer");
  var images = imageContainer.getElementsByTagName("img");

  for (var i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }

  if (choix !== "") {
    var image = document.getElementById(choix);
    image.style.display = "block";
  }
}


