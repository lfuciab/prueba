// Ejemplo de interactividad
const grain = document.querySelector('.grain');

grain.addEventListener('click', () => {
    grain.style.opacity = Math.random() * 0.5 + 0.1; // Cambia la opacidad al azar
});