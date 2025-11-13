// Swiper con efecto flip tipo hoja
const swiper = new Swiper('.swiper', {
  effect: 'flip',
  grabCursor: true,
  speed: 900,
  flipEffect: {
    slideShadows: true,
    limitRotation: true,
  },
  allowTouchMove: true,
  slidesPerView: 1,
});

// Navegación
document.getElementById('next').addEventListener('click', () => swiper.slideNext());
document.getElementById('prev').addEventListener('click', () => swiper.slidePrev());

// Función: generar y descargar PDF
async function downloadVisualPDF() {
  const slides = document.querySelectorAll('.swiper-slide .content');
  if (!slides.length) {
    alert('No se encontraron páginas para convertir a PDF.');
    return;
  }

  const wrapper = document.createElement('div');
  wrapper.style.position = 'fixed';
  wrapper.style.left = '-9999px';
  wrapper.style.top = '0';
  wrapper.style.width = '800px';
  wrapper.style.padding = '20px';
  wrapper.style.background = '#ffffff';
  document.body.appendChild(wrapper);

  slides.forEach((s) => {
    const clone = s.cloneNode(true);
    clone.style.width = '100%';
    clone.style.pageBreakAfter = 'always';
    wrapper.appendChild(clone);
  });

  const opt = {
    margin: 10,
    filename: 'Portafolio_HS.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
  };

  try {
    await html2pdf().set(opt).from(wrapper).save();
  } catch (e) {
    alert('Error al generar el PDF.');
    console.error(e);
  } finally {
    wrapper.remove();
  }
}

document.getElementById('pdf-download').addEventListener('click', downloadVisualPDF);
