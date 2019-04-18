var titulo = null;

window.onload = function inic() {

  // PARA RESPONSIVE DE NAV
  var x = window.matchMedia("(max-width: 414px)");
  myFunction(x); // Call listener function at run time
  x.addListener(myFunction); // Attach listener function on state changes
  function myFunction(x) {
    if (x.matches) {
      // If media query matches
      interfaceMovil();
    } else {
      // SI ES MAS GRANDE Q IPHONE
      primero();
    }
  }
};


/*
Funcion que indica parametros cuando se esta en version movil
*/
function interfaceMovil(){
  titulo = document.getElementById("titulo");
  titulo.style.fontSize = "4em";
  titulo.style.transitionDuration = "2s";
  titulo.style.opacity = 1;
}


/*
Funcion que indica parametros cuando se esta en version escritorio
*/
function primero() {

  titulo = document.getElementById("titulo");
  titulo.style.fontSize = "15em";
  titulo.style.transitionDuration = "2s";
  titulo.style.opacity = 1;
}

/*  function openMenu() {
  cajaTitulo = document.getElementById("cajaTitulo");
  cajaTitulo.style.display = "none";
  menu.style.display = "block";
  menu.style.color = "rgb(99, 201, 68)";
  menu.style.fontSize = "5em";
  menu.style.transitionDuration = "5s";
  menu.style.marginLeft = "50%";
} */


/*
window.onload = function() {
  document.getElementById("open-hide").addEventListener("click", changeClass);
}; */
