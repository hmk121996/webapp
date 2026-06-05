// Room Filtering and Image Gallery
document.addEventListener('DOMContentLoaded', function() {
  // Room Filtering
  const filterTabs = document.querySelectorAll('.filter-tab');
  const roomItems = document.querySelectorAll('.room-item');
  
  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Remove active class from all tabs
      filterTabs.forEach(t => t.classList.remove('active'));
      
      // Add active class to clicked tab
      tab.classList.add('active');
      
      // Get filter value
      const filterValue = tab.getAttribute('data-filter');
      
      // Filter rooms
      roomItems.forEach(room => {
        if (filterValue === 'all' || room.classList.contains(filterValue)) {
          room.classList.remove('hidden');
        } else {
          room.classList.add('hidden');
        }
      });
    });
  });

  // Room Images Gallery
  const roomGalleries = document.querySelectorAll('.room-gallery');

  roomGalleries.forEach(gallery => {
    const mainImage = gallery.querySelector('.main-image img');
    const thumbnails = gallery.querySelectorAll('.thumbnail');
    const prevBtn = gallery.querySelector('.gallery-prev');
    const nextBtn = gallery.querySelector('.gallery-next');
    if (!mainImage || thumbnails.length === 0) return;
    let currentIndex = 0;

    function updateGallery(index) {
      mainImage.src = thumbnails[index].getAttribute('data-full');
      mainImage.alt = thumbnails[index].alt;
      thumbnails.forEach(img => img.classList.remove('active'));
      thumbnails[index].classList.add('active');
      currentIndex = index;

      // scroll active thumbnail into view within the strip
      thumbnails[index].scrollIntoView({ block: 'nearest', inline: 'nearest' });
    }

    thumbnails.forEach((thumb, index) => {
      thumb.addEventListener('click', () => updateGallery(index));
    });

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        updateGallery((currentIndex - 1 + thumbnails.length) % thumbnails.length);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        updateGallery((currentIndex + 1) % thumbnails.length);
      });
    }
  });

  // Price breakdown toggle
  const priceToggles = document.querySelectorAll('.price-toggle');
  
  priceToggles.forEach(toggle => {
    toggle.addEventListener('click', function() {
      const priceBreakdown = this.nextElementSibling;
      const icon = this.querySelector('i');
      
      priceBreakdown.classList.toggle('active');
      this.classList.toggle('active');
      
      // Toggle icon
      if (priceBreakdown.classList.contains('active')) {
        icon.classList.remove('fa-chevron-down');
        icon.classList.add('fa-chevron-up');
      } else {
        icon.classList.remove('fa-chevron-up');
        icon.classList.add('fa-chevron-down');
      }
    });
  });

  // Check URL for room hash and scroll to it
  function scrollToRoom() {
    const hash = window.location.hash;
    if (hash) {
      const targetRoom = document.querySelector(hash);
      if (targetRoom) {
        setTimeout(() => {
          window.scrollTo({
            top: targetRoom.offsetTop - 100,
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  }
  
  // Execute on page load
  scrollToRoom();
  
  // Also execute when hash changes
  window.addEventListener('hashchange', scrollToRoom);
});