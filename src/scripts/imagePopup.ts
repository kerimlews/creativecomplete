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
  const projectImagesSection = document.querySelector('.project-images-section');
      
  // Extract images from the DOM
  function extractImagesFromDOM() {
    const images: any[] = [];
    
    // Get all images from project-images-section (for project pages)
    if (projectImagesSection) {
      const allImages = projectImagesSection.querySelectorAll('img');
      allImages.forEach(img => {
        if (img && img.src && !img.classList.contains('popup-image')) {
          // Get the actual src from the img element (handles Astro's image optimization)
          const imgSrc = img.getAttribute('src') || img.src;
          // Skip if already added
          if (!images.some(i => i.src === imgSrc)) {
            images.push({
              src: imgSrc,
              alt: img.alt || 'Project image'
            });
          }
        }
      });
    }
    
    // Get images from stacked items (for service pages)
    if (images.length === 0) {
      stackedItems.forEach(item => {
        const img = item.querySelector('img');
        if (img && img.src) {
          const imgSrc = img.getAttribute('src') || img.src;
          if (!images.some(i => i.src === imgSrc)) {
            images.push({
              src: imgSrc,
              alt: img.alt || 'Project image'
            });
          }
        }
      });
    }
    
    // Get images from single service image containers (fallback)
    if (images.length === 0) {
      serviceImageContainers.forEach(container => {
        const img = container.querySelector('img');
        if (img && img.src) {
          const imgSrc = img.getAttribute('src') || img.src;
          if (!images.some(i => i.src === imgSrc)) {
            images.push({
              src: imgSrc,
              alt: img.alt || 'Project image'
            });
          }
        }
      });
    }
    
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
      const imageData = allServiceImages[currentImageIndex];
      popupImage.src = imageData.src;
      popupImage.alt = imageData.alt || 'Project image';
      popupImage.style.display = 'block';
      
      if (popupCounter) {
        popupCounter.textContent = `${currentImageIndex + 1} / ${allServiceImages.length}`;
      }
      
      if (prevImageBtn) {
        prevImageBtn.disabled = currentImageIndex === 0;
        prevImageBtn.style.opacity = currentImageIndex === 0 ? '0.3' : '1';
      }
      if (nextImageBtn) {
        nextImageBtn.disabled = currentImageIndex === allServiceImages.length - 1;
        nextImageBtn.style.opacity = currentImageIndex === allServiceImages.length - 1 ? '0.3' : '1';
      }
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
  function attachClickListeners() {
    // For project images section
    if (projectImagesSection) {
      const clickableImages = projectImagesSection.querySelectorAll('img:not(.popup-image)');
      clickableImages.forEach((img, index) => {
        img.style.cursor = 'pointer';
        img.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          console.log('Project image clicked', index);
          openPopup(index);
        });
      });
    }
    
    // For service image containers
    serviceImageContainers.forEach(container => {
      container.style.cursor = 'pointer';
      container.addEventListener('click', () => {
        console.log('Service image clicked');
        openPopup(0);
      });
    });

    // For stacked items
    stackedItems.forEach((item, index) => {
      item.style.cursor = 'pointer';
      item.addEventListener('click', () => {
        console.log('Stacked item clicked', index);
        openPopup(index);
      });
    });
  }
  
  attachClickListeners();

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