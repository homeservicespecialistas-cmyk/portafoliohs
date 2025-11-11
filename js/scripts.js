// Lógica para la navegación, sonido y PDF.
document.addEventListener('DOMContentLoaded', function() {
    const wrapper = document.getElementById('pages-wrapper');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const pages = document.querySelectorAll('.page');
    let currentPage = 0;

    // Inicializar Howler para el sonido
    const audioFlip = new Howl({
      src: ['sounds/pasar-pagina.mp3'],
      volume: 0.5,
      // Precarga para evitar retrasos
      html5: true 
    });
    
    function updatePageDisplay() {
        // Aplica la transición para pasar página
        const offset = -currentPage * 100;
        wrapper.style.transform = `translateX(${offset}%)`;
        
        // Habilita/Deshabilita botones
        prevBtn.disabled = currentPage === 0;
        nextBtn.disabled = currentPage === pages.length - 1;

        // Reproduce el sonido si no es la primera carga
        if (currentPage > 0 || currentPage < pages.length) {
             audioFlip.play();
        }
    }

    nextBtn.addEventListener('click', () => {
        if (currentPage < pages.length - 1) {
            currentPage++;
            updatePageDisplay();
        }
    });

    prevBtn.addEventListener('click', () => {
        if (currentPage > 0) {
            currentPage--;
            updatePageDisplay();
        }
    });

    // Función para Descargar PDF (Corregida para apuntar al contenedor correcto)
    document.getElementById("btn-descargar").addEventListener("click", function() {
        html2pdf().from(document.getElementById("pages-wrapper")).set({
            margin: [10, 10, 10, 10], 
            filename: 'revista-digital.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2, logging: true, dpi: 192, letterRendering: true },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
        }).save();
    });

    // Inicialización al cargar la página
    updatePageDisplay(); 
});
