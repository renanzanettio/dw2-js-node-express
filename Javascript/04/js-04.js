
function zerarSemaforos() {
  document.getElementById("prosseguir").style.background = "gray";
  document.getElementById("atencao").style.background = "gray";
  document.getElementById("parar").style.background = "gray";
}

function parar() {
  zerarSemaforos();
  document.getElementById("parar").style.background = "red";
}

function atencao() {
  zerarSemaforos();
  document.getElementById("atencao").style.background = "yellow";
}

function prosseguir() {
  zerarSemaforos();
  document.getElementById("prosseguir").style.background = "green";
}
