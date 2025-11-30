let currentImageIndex = 0;
let allServiceImages: any[] = []; // Renamed to avoid conflict

document.addEventListener('DOMContentLoaded', () => {    
  const imagePopup = document.getElementById('imagePopup');
  const popupImage = document.getElementById('popupImage') as HTMLImageElement;
  const popupCounter = document.getElementById('popupCounter');
  const closePopupBtn = document.getElementById('closePopup');
  const prevImageBtn = document.getElementById('prevImage') as HTMLButtonElement;
  const nextImageBtn = document.getElementById('nextImage') as HTMLButtonElement;
  
  // Select the actual clickable containers, not the images themselves
  const serviceImageContainers = document.querySelectorAll('.service-image');
  const stackedItems = document.querySelectorAll('.stacked-item');
      
  // Extract images from the DOM
  function extractImagesFromDOM() {
    const images: any[] = [];
    
    // Get images from stacked items
    stackedItems.forEach(item => {
      const img = item.querySelector('img');
      if (img && img.src) {
        images.push({
          src: img.src,
          alt: img.alt
        });
      }
    });
    
    // Get images from single service image containers
    serviceImageContainers.forEach(container => {
      const img = container.querySelector('img');
      if (img && img.src) {
        images.push({
          src: img.src,
          alt: img.alt
        });
      }
    });
    
    return images;
  }

  allServiceImages = extractImagesFromDOM();

  function openPopup(index: number) {
    if (allServiceImages.length === 0) {
      console.log('No images found');
      return;
    }
    
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
    if (popupImage && allServiceImages[currentImageIndex]) {
      popupImage.src = allServiceImages[currentImageIndex].src;
      popupImage.alt = allServiceImages[currentImageIndex].alt;
      if (popupCounter) {
        popupCounter.textContent = `${currentImageIndex + 1} / ${allServiceImages.length}`;
      }
      
      if (prevImageBtn) prevImageBtn.disabled = currentImageIndex === 0;
      if (nextImageBtn) nextImageBtn.disabled = currentImageIndex === allServiceImages.length - 1;
    }
  }

  function nextImage() {
    if (currentImageIndex < allServiceImages.length - 1) {
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

  // Add click listeners to containers
  serviceImageContainers.forEach(container => {
    container.addEventListener('click', () => {
      console.log('Service image clicked');
      openPopup(0);
    });
  });

  stackedItems.forEach((item, index) => {
    item.addEventListener('click', () => {
      console.log('Stacked item clicked', index);
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

  // Debug logging
  console.log('Service image containers:', serviceImageContainers.length);
  console.log('Stacked items:', stackedItems.length);
  console.log('All images found:', allServiceImages.length);
});