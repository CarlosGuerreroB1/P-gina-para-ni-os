let animales = [
  { nombre: "Elefante", imagen: "elefante.jpg" },
  { nombre: "León", imagen: "leon.jpg" },
  { nombre: "Tigre", imagen: "tigre.jpg" },
  { nombre: "Cebra", imagen: "cebra.jpg" },
  { nombre: "Jirafa", imagen: "jirafa.jpg" },
  { nombre: "Gato", imagen: "gato.jpg" },
  { nombre: "Perro", imagen: "perro.jpg" },
  { nombre: "Tortuga", imagen: "tortuga.jpg" },
  { nombre: "Loro", imagen: "loro.jpg" },
  { nombre: "Lobo", imagen: "lobo.jpg" },
  { nombre: "Gallina", imagen: "gallina.jpg" },
  { nombre: "Gallo", imagen: "gallo.jpg" },
  { nombre: "Oveja", imagen: "oveja.jpg" },
  { nombre: "Pez", imagen: "pez.jpg" },
  { nombre: "Vaca", imagen: "vaca.jpg" },
  { nombre: "Toro", imagen: "toro.jpg" },
  { nombre: "Mono", imagen: "mono.jpg" },
  { nombre: "Cabra", imagen: "cabra.jpg" },
  { nombre: "Pato", imagen: "pato.jpg" },
  { nombre: "Caballo", imagen: "caballo.jpg" },
];

// Función para obtener un animal aleatorio
function obtenerAnimalAleatorio() {
  let indiceAleatorio = Math.floor(Math.random() * animales.length);
  return animales[indiceAleatorio];
}

function iniciarJuego() {
  let animal = obtenerAnimalAleatorio();
  document.getElementById("animalImage").src = "../multimedia/" + animal.imagen;
  document.getElementById("animalDisplay").textContent = " ¿Qué animal es este? ";
  document.getElementById("animalDisplay").setAttribute("data-animal", animal.nombre);
}

function adivinarAnimal() {
  let respuestaUsuario = document.getElementById("inputAnimal").value;
  let animalActual = document.getElementById("animalDisplay").getAttribute("data-animal");
  if (respuestaUsuario.toLowerCase() === animalActual.toLowerCase()) {
    alert("¡Correcto! Has adivinado el animal.");
  } else {
    alert("Incorrecto. Intenta de nuevo.");
  }

  iniciarJuego();
}

window.onload = iniciarJuego;
