// script.js



window.addEventListener('scroll', function () {
    const navbar = document.querySelector('nav');
    // const heroSection = document.querySelector('.hero');
    // const heroHeight = heroSection.offsetHeight;

    if (window.scrollY > 0) { // Change condition to check for any scroll
        navbar.style.opacity = '0.8';
    } else {
        navbar.style.opacity = '1';
    }
});


    const form = document.getElementById('contactForm');
    const mensajeEnviado = document.getElementById('mensajeEnviado');
    const volverBtn = document.getElementById('volverBtn');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const correo = document.getElementById('correo').value.trim();
    const interes = document.getElementById('interes').value;
    const mensaje = document.getElementById('mensaje').value.trim();
    const terminos = document.getElementById('terminos').checked;

    if (!nombre || !correo || !interes || !mensaje || !terminos) {
        alert('Por favor, completa todos los campos y acepta los términos.');
    return;
    }

    // Simula envío
    form.classList.add('hidden');
    mensajeEnviado.classList.remove('hidden');
    form.reset();
  });

  volverBtn.addEventListener('click', () => {
        mensajeEnviado.classList.add('hidden');
    form.classList.remove('hidden');
  });
