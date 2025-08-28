// Inicializar animaciones AOS
AOS.init();

// Mostrar mensaje sorpresa
function mostrarSorpresa() {
    document.getElementById("sorpresa").style.display = "block";
}

// Generar corazones animados
function crearCorazon() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 15 + "px";
    heart.style.animationDuration = Math.random() * 3 + 5 + "s";
    document.querySelector(".hearts").appendChild(heart);
    setTimeout(() => heart.remove(), 8000);
}
setInterval(crearCorazon, 500);

// Generar estrellas en el fondo
function crearEstrella() {
    const star = document.createElement("div");
    star.classList.add("star");
    const size = Math.random() * 3 + 1; // tamaño 1-4px
    star.style.width = size + "px";
    star.style.height = size + "px";
    star.style.top = Math.random() * 100 + "vh";
    star.style.left = Math.random() * 100 + "vw";
    star.style.animationDuration = (Math.random() * 3 + 2) + "s";
    document.querySelector(".stars").appendChild(star);
}
for (let i = 0; i < 80; i++) { // número de estrellas
    crearEstrella();
}
