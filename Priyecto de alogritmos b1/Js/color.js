let color = [
  { n: "rojo", imagen: "rojo.jpg" },
  { n: "amarillo", imagen: "amarillo.jpg" },
  { n: "azul", imagen: "azul.jpg" },
  { n: "naranja", imagen: "naranja.jpg" },
  { n: "negro", imagen: "negro.jpg" },
  { n: "violeta", imagen: "violeta.jpg" },
  { n: "fucsia", imagen: "fucsia.png" },
  { n: "verde", imagen: "verde.jpg" },
  { n: "blanco", imagen: "blanco.jpeg" },
  { n: "celeste", imagen: "celeste.jpeg" },
  { n: "marron", imagen: "marron.jpg" },
  // { n: "", imagen: ".jpg" },
  // { n: "", imagen: ".jpg" },
];
function obtenercolorAleatorio() {
  let indiceAleatorio = Math.floor(Math.random() * color.length);
  return color[indiceAleatorio];
}
function iniciarJuego() {
  let color = obtenercolorAleatorio();
  document.getElementById("colorImage").src = "../multimedia/" + color.imagen;
  document.getElementById("colorDisplay").textContent =" ¿Qué color es este?: ";
  document.getElementById("colorDisplay").setAttribute("data-color", color.n);
}
function adivinarcolor() {
  let respuestaUsuario = document.getElementById("inputcolor").value;
  let colorActual = document.getElementById("colorDisplay").getAttribute("data-color");

  if (respuestaUsuario.toLowerCase() === colorActual.toLowerCase()) {
    alert("¡Correcto! Has adivinado el color.");
  } else {
    alert("Incorrecto. Intenta de nuevo.");
  }
  iniciarJuego();
}
window.onload = iniciarJuego;