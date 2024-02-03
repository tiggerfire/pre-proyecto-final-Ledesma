let tarjetas = document.querySelectorAll("#partes-imagenes img");

function inicioTranslado() {
  let pieza_1 = document.getElementById("soltar-1");
  let pieza_2 = document.getElementById("soltar-2");
  let pieza_3 = document.getElementById("soltar-3");

  for (let i = 0; i < tarjetas.length; i++) {
    tarjetas[i].addEventListener("dragstart", moviendoPieza, false);
  }

  pieza_1.addEventListener(
    "dragenter",
    function (e) {
      e.preventDefault();
    },
    false
  );
  pieza_1.addEventListener(
    "dragover",
    function (e) {
      e.preventDefault();
    },
    false
  );
  pieza_1.addEventListener("drop", soltandoPieza, false);

  pieza_2.addEventListener(
    "dragenter",
    function (e) {
      e.preventDefault();
    },
    false
  );
  pieza_2.addEventListener(
    "dragover",
    function (e) {
      e.preventDefault();
    },
    false
  );
  pieza_2.addEventListener("drop", soltandoPieza, false);

  pieza_3.addEventListener(
    "dragenter",
    function (e) {
      e.preventDefault();
    },
    false
  );
  pieza_3.addEventListener(
    "dragover",
    function (e) {
      e.preventDefault();
    },
    false
  );
  pieza_3.addEventListener("drop", soltandoPieza, false);
}

function moviendoPieza(e) {
  pieza = e.target;
  e.dataTransfer.setData("Text", pieza.getAttribute("id"));
}

async function soltandoPieza(e) {
  e.preventDefault();
  console.log(e);
  let id = e.dataTransfer.getData("Text");
  let imagen = document.getElementById(id);
  imagen.style.display = "none";
  e.target.innerHTML =
    '<img src="' + imagen.src + '" height="400px" width="275px">';
}

function reniciar() {
  window.location.reload();
}

inicioTranslado();
