// Función para la Galería de Imágenes
function cambiarImagen(url) {
    // Busca el elemento con el ID que definiste en tu HTML
    const visor = document.getElementById('viewfinder');
    
    // Si el elemento existe, cambia su fuente (src) por la de la miniatura clickeada
    if (visor) {
        visor.src = url;
    }
}