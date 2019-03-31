var titulo = null;
var menu = null;

window.onload = function inic() {
  // PARA RESPONSIVE DE NAV
  var x = window.matchMedia("(max-width: 414px)");
  myFunction(x); // Call listener function at run time
  x.addListener(myFunction); // Attach listener function on state changes
  function myFunction(x) {
    if (x.matches) {
      // If media query matches
    } else {
      // SI ES MAS GRANDE Q IPHONE
      primero();
    }
  }
};

function primero() {
  menu = document.getElementById("menu");
  menu.style.display = "none";
  titulo = document.getElementById("titulo");
  titulo.style.fontSize = "15em";
  titulo.style.transitionDuration = "2s";
  titulo.style.opacity = 1;
}

function openMenu() {
  cajaTitulo = document.getElementById("cajaTitulo");
  cajaTitulo.style.display = "none";
  menu.style.display = "block";
  menu.style.color = "rgb(99, 201, 68)";
  menu.style.fontSize = "5em";
  menu.style.transitionDuration = "5s";
  menu.style.marginLeft = "50%";
}

function changeClass() {
  document.getElementById("open-hide").classList.toggle("show");
}

window.onload = function() {
  document.getElementById("open-hide").addEventListener("click", changeClass);
};
