  let currentImageIndex = 0;
  let projectImages: any[] = [];

  document.addEventListener('DOMContentLoaded', () => {
    const imagePopup = document.getElementById('imagePopup');
    const popupImage = document.getElementById('popupImage');
    const popupCounter = document.getElementById('popupCounter');
    const closePopupBtn = document.getElementById('closePopup');
    const prevImageBtn = document.getElementById('prevImage');
    const nextImageBtn = document.getElementById('nextImage');
    
    const serviceImages = document.querySelectorAll('.service-image');
    const stackedItems = document.querySelectorAll('.stacked-item');

    // Extract images from the DOM
    function extractImagesFromDOM() {
      const images: any[] = [];
      
      // Get images from stacked items
      stackedItems.forEach(item => {
        const img = item.querySelector('img');
        if (img) {
          images.push({
            src: img.src,
            alt: img.alt
          });
        }
      });
      
      // Get images from single service image
      serviceImages.forEach(container => {
        const img = container.querySelector('img');
        if (img) {
          images.push({
            src: img.src,
            alt: img.alt
          });
        }
      });
      
      return images;
    }

    projectImages = extractImagesFromDOM();

    function openPopup(index: number) {
      if (projectImages.length === 0) return;
      
      currentImageIndex = index;
      updatePopupImage();
      imagePopup?.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    function closePopup() {
      imagePopup?.classList.remove('active');
      document.body.style.overflow = 'auto';
    }

    function updatePopupImage() {
      if (popupImage && projectImages[currentImageIndex]) {
        popupImage.src = projectImages[currentImageIndex].src;
        popupImage.alt = projectImages[currentImageIndex].alt;
        popupCounter.textContent = `${currentImageIndex + 1} / ${projectImages.length}`;
        
        prevImageBtn.disabled = currentImageIndex === 0;
        nextImageBtn.disabled = currentImageIndex === projectImages.length - 1;
      }
    }

    function nextImage() {
      if (currentImageIndex < projectImages.length - 1) {
        currentImageIndex++;
        updatePopupImage();
      }
    }

    function prevImage() {
      if (currentImageIndex > 0) {
        currentImageIndex--;
        updatePopupImage();
      }
    }

    serviceImages.forEach(container => {
      container.addEventListener('click', () => {
        openPopup(0);
      });
    });

    stackedItems.forEach((item, index) => {
      item.addEventListener('click', () => {
        openPopup(index);
      });
    });

    closePopupBtn?.addEventListener('click', closePopup);
    prevImageBtn?.addEventListener('click', prevImage);
    nextImageBtn?.addEventListener('click', nextImage);

    imagePopup?.addEventListener('click', (e) => {
      if (e.target === imagePopup) {
        closePopup();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (!imagePopup?.classList.contains('active')) return;
      
      if (e.key === 'Escape') closePopup();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    });
  });