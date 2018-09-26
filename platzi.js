var vp = document.getElementById('villaplatzi');
var papel = vp.getContext("2d");

var fondo = {
  url : "tile.png",
  cargaOK: false
};

var pollo = {
  url : "pollo.png",
  cargaOK: false
};

var cantidad = aleatorio(5, 25);

var vaca = {
  url : "vaca.png",
  cargaOK: false
};

var cerdo = {
  url : "cerdo.png",
  cargaOK: false
}

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

pollo.objeto = new Image();
pollo.objeto.src = pollo.url;
pollo.objeto.addEventListener("load", cargarPollo);

vaca.objeto = new Image();
vaca.objeto.src = vaca.url;
vaca.objeto.addEventListener("load", cargarVaca);


cerdo.objeto = new Image();
cerdo.objeto.src = "cerdo.png";
cerdo.objeto.addEventListener("load", cargarCerdo);

function dibujar()
{
  if (fondo.cargaOK) {
    papel.drawImage(fondo.imagen, 0,0);
  }
  if (pollo.cargaOK) {
    console.log(cantidad);
    for (var p = 0; p < cantidad; p++) {
      var x = aleatorio (0, 10);
      var y = aleatorio(0, 10);
      var x = x * 40;
      var y = y * 40;
    papel.drawImage(pollo.objeto, x,y);
    }
  }
  if (vaca.cargaOK) {
    for (var v = 0; v < cantidad; v++) {
      var x = aleatorio (0, 20);
      var y = aleatorio (0, 20);
      var x = x * 20;
      var y = y * 20;
      papel.drawImage(vaca.objeto, x,y);
    }
    if (cerdo.cargaOK) {
      for (var c = 0; c < cantidad; c++) {
        var x = aleatorio (0, 20);
        var y = aleatorio (0, 20);
        var x = x * 20;
        var y = y * 20;
        papel.drawImage(cerdo.objeto, x,y);
      }
    }

  }
};

function cargarFondo()
{
  fondo.cargaOK = true;
  dibujar();
};

function cargarPollo()
{
  pollo.cargaOK = true;
  dibujar();
};

function cargarVaca()
{
  vaca.cargaOK = true;
  dibujar();
};

function cargarCerdo()
{
  cerdo.cargaOK = true;
  dibujar();
};


function aleatorio (min, maxi)
{
  var resultado;
  resultado = Math.floor(Math.random()*(maxi - min + 1)) + min;
  return resultado;
}
