var modalBack = document.getElementById("modal-background");

var closeIcon = document.getElementsByClassName("close-icon")[0];

closeIcon.onclick = function() {
  modalBack.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modalBack) {
    modalBack.style.display = "none";
  }
}



