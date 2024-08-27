function encriptarTexto() {
  console.log("mi funcion enceiptrar se ejecuto");
  const textoIngresado = document.getElementById("ingresarTexto").value;
  const mensajeEncriptado = encriptar(textoIngresado);
  document.getElementById("textoEncriptado").value = mensajeEncriptado;

  document.getElementById("textoEncriptado").style.visibility = "visible";
}

function desencriptarTexto() {
  const mensajeEncriptado = document.getElementById("textoEncriptado").value;
  const textoDesencriptado = desencriptar(mensajeEncriptado);
  document.getElementById("textoPresentacion").style.visibility = "hidden";
  document.getElementById("textoEncriptado").value = textoDesencriptado;
  document.getElementById("textoEncriptado").style.visibility = "visible";
}

function copiarTexto() {
  console.log("Copiando texto");
  const mensajeEncriptado = document.getElementById("textoEncriptado");
  mensajeEncriptado.select();
  mensajeEncriptado.setSelectionRange(0, 99999); // Para dispositivos móviles
  document.execCommand("copy");
  alert("Texto copiado al portapapeles");
}

function encriptar(texto) {
  let textoEncriptado = texto.toLowerCase();
  textoEncriptado = textoEncriptado.replaceAll("e", "enter");
  textoEncriptado = textoEncriptado.replaceAll("i", "imes");
  textoEncriptado = textoEncriptado.replaceAll("a", "ai");
  textoEncriptado = textoEncriptado.replaceAll("o", "ober");
  textoEncriptado = textoEncriptado.replaceAll("u", "ufat");
  return textoEncriptado;
}

function desencriptar(textoEncriptado) {
  let textoDesencriptado = textoEncriptado;
  textoDesencriptado = textoDesencriptado.replaceAll("enter", "e");
  textoDesencriptado = textoDesencriptado.replaceAll("imes", "i");
  textoDesencriptado = textoDesencriptado.replaceAll("ai", "a");
  textoDesencriptado = textoDesencriptado.replaceAll("ober", "o");
  textoDesencriptado = textoDesencriptado.replaceAll("ufat", "u");
  return textoDesencriptado;
}

function test() {
  document.getElementById("textoPresentacion").style.visibility = "visible";
  document.getElementById("textoEncriptado").style.visibility = "hidden";
}
test();

var element = document.getElementById("ingresarTexto");
element.addEventListener("input", function () {
  const textoIngresado = document.getElementById("ingresarTexto").value;
  if (textoIngresado == "") {
    document.getElementById("textoPresentacion").style.visibility = "visible";
    document.getElementById("textoEncriptado").style.visibility = "hidden";
  }
});
