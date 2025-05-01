document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que se recargue la página al enviar el formulario

    // Capturamos los valores del formulario
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const puntuacion = document.getElementById("puntuacion").value;

    // Guardamos los datos en el localStorage (solo para demostración temporal)
    localStorage.setItem("nombre", nombre);
    localStorage.setItem("email", email);
    localStorage.setItem("puntuacion", puntuacion);

    // Mostramos los datos ingresados en la misma página
    const resultado = `
        <h3>Gracias por tu mensaje, ${nombre}!</h3>
        <p>Tu email: ${email}</p>
        <p>Puntuación de las fotos: ${getPuntuacion(puntuacion)}</p>
    `;
    document.getElementById("resultado").innerHTML = resultado;

    // Limpiamos el formulario
    document.getElementById("contactForm").reset();
});

// Función para convertir la puntuación numérica en palabras
function getPuntuacion(puntuacion) {
    switch (puntuacion) {
        case "1": return "Las he visto mejores..";
        case "2": return "Están bien.";
        case "3": return "Muy bonitas.";
        case "4": return "Espectaculares.";
        case "5": return "Las mejores fotos que he visto.";
        default: return "No especificado";
    }
}