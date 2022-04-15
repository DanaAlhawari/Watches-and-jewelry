// modal --button in kontakt sida


let modal = document.getElementById("myModal");

// hämta button som ska öppna modal 

let btn = document.getElementById("myBtn");

// hämta <span> element som ska stänga modal
let span = document.getElementsByClassName("close")[0];

// när använder klick på button öppnar det modal 

btn.onclick = function() {
  modal.style.display = "block";
}

// när använder klick på span (x) stänger det modal 
span.onclick = function() {
  modal.style.display = "none";
}

// när använder klick utanför stänger den modal
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}