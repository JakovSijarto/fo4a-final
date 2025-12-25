import './style.css'

window.addEventListener('DOMContentLoaded', () => {
  let currentSlide = 0;
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;

  function nextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % totalSlides;
    slides[currentSlide].classList.add('active');
  }

  const slideInterval = setInterval(nextSlide, 2500);

  const sliderContainer = document.querySelector('.slider-container');
  const splashScreen = document.getElementById('splash-screen');
  const mainSite = document.getElementById('main-site');

  const hideSplash = () => {
    clearInterval(slideInterval);
    splashScreen.classList.add('hidden');
    setTimeout(() => {
      mainSite.classList.add('visible');
      setupProjectClickHandlers();
      setupAwardHandlers();
    }, 300);
  };

  sliderContainer.addEventListener('click', hideSplash);

  const hamburger = document.querySelector('.hamburger');
  const navLinksContainer = document.querySelector('.nav-links');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinksContainer.classList.toggle('active');
  });

  const navLinks = document.querySelectorAll('.nav-link');
  const pages = document.querySelectorAll('.page');

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetPage = link.getAttribute('data-page');

      navLinks.forEach(navLink => {
        navLink.classList.remove('active');
      });
      link.classList.add('active');

      pages.forEach(page => {
        page.classList.remove('active');
      });

      const targetElement = document.getElementById(`${targetPage}-page`);
      if (targetElement) {
        targetElement.classList.add('active');

        const mainContent = document.querySelector('.main-content');
        if (mainContent) {
          mainContent.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }

      hamburger.classList.remove('active');
      navLinksContainer.classList.remove('active');
    });
  });

  const backToAwardsLinks = document.querySelectorAll('.back-to-awards');
  backToAwardsLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetPage = link.getAttribute('data-page');

      navLinks.forEach(navLink => {
        navLink.classList.remove('active');
      });

      const aboutNavLink = document.querySelector('.nav-link[data-page="about"]');
      if (aboutNavLink) {
        aboutNavLink.classList.add('active');
      }

      pages.forEach(page => {
        page.classList.remove('active');
      });

      const targetElement = document.getElementById(`${targetPage}-page`);
      if (targetElement) {
        targetElement.classList.add('active');

        const mainContent = document.querySelector('.main-content');
        if (mainContent) {
          mainContent.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    });
  });

  let currentGalleryIndex = 0;
  const galleryTrack = document.querySelector('.gallery-track');
  const galleryItems = document.querySelectorAll('.gallery-item');
  const totalGalleryItems = galleryItems.length;

  function updateGalleryPosition() {
    const offset = -currentGalleryIndex * 100;
    galleryTrack.style.transform = `translateX(${offset}vw)`;
  }

  const prevBtn = document.querySelector('.gallery-prev');
  const nextBtn = document.querySelector('.gallery-next');

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      currentGalleryIndex = (currentGalleryIndex - 1 + totalGalleryItems) % totalGalleryItems;
      updateGalleryPosition();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      currentGalleryIndex = (currentGalleryIndex + 1) % totalGalleryItems;
      updateGalleryPosition();
    });
  }

  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you for your message! We will get back to you soon.');
      contactForm.reset();
    });
  }

  const textLinks = document.querySelectorAll('.text-link[data-page]');
  textLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetPage = link.getAttribute('data-page');

      navLinks.forEach(navLink => navLink.classList.remove('active'));
      pages.forEach(page => page.classList.remove('active'));

      const targetElement = document.getElementById(`${targetPage}-page`);
      if (targetElement) {
        targetElement.classList.add('active');
        const navLink = document.querySelector(`[data-page="${targetPage}"]`);
        if (navLink && navLink.classList.contains('nav-link')) {
          navLink.classList.add('active');
        }

        const mainContent = document.querySelector('.main-content');
        if (mainContent) {
          mainContent.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    });
  });

  const footerLinks = document.querySelectorAll('.footer-section a[data-page]');
  footerLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetPage = link.getAttribute('data-page');

      navLinks.forEach(navLink => navLink.classList.remove('active'));
      pages.forEach(page => page.classList.remove('active'));

      const targetElement = document.getElementById(`${targetPage}-page`);
      if (targetElement) {
        targetElement.classList.add('active');
        const navLink = document.querySelector(`.nav-link[data-page="${targetPage}"]`);
        if (navLink) {
          navLink.classList.add('active');
        }

        const mainContent = document.querySelector('.main-content');
        if (mainContent) {
          mainContent.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    });
  });

  const ctaButtons = document.querySelectorAll('.cta-button[data-page]');
  ctaButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      const targetPage = button.getAttribute('data-page');

      navLinks.forEach(navLink => navLink.classList.remove('active'));
      pages.forEach(page => page.classList.remove('active'));

      const targetElement = document.getElementById(`${targetPage}-page`);
      if (targetElement) {
        targetElement.classList.add('active');
        const navLink = document.querySelector(`.nav-link[data-page="${targetPage}"]`);
        if (navLink) {
          navLink.classList.add('active');
        }

        const mainContent = document.querySelector('.main-content');
        if (mainContent) {
          mainContent.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    });
  });

  function setupProjectClickHandlers() {
    const featuredProjects = document.querySelectorAll('.featured-project[data-project]');
    featuredProjects.forEach(project => {
      project.addEventListener('click', () => {
        const projectIndex = parseInt(project.getAttribute('data-project'));
        const pages = document.querySelectorAll('.page');
        pages.forEach(page => page.classList.remove('active'));
        const targetPage = document.getElementById(`project-${projectIndex}-page`);
        if (targetPage) {
          targetPage.classList.add('active');
          const mainContent = document.querySelector('.main-content');
          if (mainContent) {
            mainContent.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }
      });
    });

    const projectCards = document.querySelectorAll('.project-card[data-project]');
    projectCards.forEach(card => {
      card.addEventListener('click', () => {
        const projectIndex = parseInt(card.getAttribute('data-project'));
        const pages = document.querySelectorAll('.page');
        pages.forEach(page => page.classList.remove('active'));
        const targetPage = document.getElementById(`project-${projectIndex}-page`);
        if (targetPage) {
          targetPage.classList.add('active');
          const mainContent = document.querySelector('.main-content');
          if (mainContent) {
            mainContent.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }
      });
    });

    const backToProjectsLinks = document.querySelectorAll('.back-to-projects');
    backToProjectsLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetPage = link.getAttribute('data-page');

        navLinks.forEach(navLink => {
          navLink.classList.remove('active');
        });

        const galleryNavLink = document.querySelector('.nav-link[data-page="gallery"]');
        if (galleryNavLink) {
          galleryNavLink.classList.add('active');
        }

        pages.forEach(page => {
          page.classList.remove('active');
        });

        const targetElement = document.getElementById(`${targetPage}-page`);
        if (targetElement) {
          targetElement.classList.add('active');

          const mainContent = document.querySelector('.main-content');
          if (mainContent) {
            mainContent.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }
      });
    });
  }

  function setupAwardHandlers() {
    const awardItems = document.querySelectorAll('.award-item.expandable');
    awardItems.forEach(item => {
      const header = item.querySelector('.award-header');
      if (header) {
        header.addEventListener('click', (e) => {
          if (e.target.classList.contains('award-project-link')) {
            return;
          }
          item.classList.toggle('expanded');
        });
      }
    });

    const awardProjectLinks = document.querySelectorAll('.award-project-link[data-project]');
    awardProjectLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const projectIndex = parseInt(link.getAttribute('data-project'));
        openProjectDetail(projectIndex);
      });
    });

    const awardCards = document.querySelectorAll('.award-card[data-award]');
    awardCards.forEach(card => {
      card.addEventListener('click', (e) => {
        if (e.target.classList.contains('award-detail-link')) {
          e.preventDefault();
        }
        const awardPage = card.getAttribute('data-award');
        const pages = document.querySelectorAll('.page');
        pages.forEach(page => page.classList.remove('active'));
        const targetPage = document.getElementById(`${awardPage}-page`);
        if (targetPage) {
          targetPage.classList.add('active');
          window.scrollTo(0, 0);
        }
      });
    });

    const awardDetailLinks = document.querySelectorAll('.award-detail-link');
    awardDetailLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const card = link.closest('.award-card[data-award]');
        if (card) {
          const awardPage = card.getAttribute('data-award');
          const pages = document.querySelectorAll('.page');
          pages.forEach(page => page.classList.remove('active'));
          const targetPage = document.getElementById(`${awardPage}-page`);
          if (targetPage) {
            targetPage.classList.add('active');
            window.scrollTo(0, 0);
          }
        }
      });
    });

    const viewProjectBtns = document.querySelectorAll('.view-project-btn[data-project]');
    viewProjectBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const projectIndex = parseInt(btn.getAttribute('data-project'));
        openProjectDetail(projectIndex);
      });
    });
  }

  function animateCounters() {
    const statNumbers = document.querySelectorAll('.stat-number[data-target]');

    const observerOptions = {
      threshold: 0.5,
      rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
          entry.target.classList.add('counted');
          const target = parseInt(entry.target.getAttribute('data-target'));
          const duration = 2000;
          const increment = target / (duration / 16);
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              entry.target.textContent = target;
              clearInterval(timer);
            } else {
              entry.target.textContent = Math.floor(current);
            }
          }, 16);
        }
      });
    }, observerOptions);

    statNumbers.forEach(number => {
      observer.observe(number);
    });
  }

  setTimeout(() => {
    animateCounters();
  }, 500);

  let currentLightboxImages = [];
  let currentLightboxIndex = 0;
  const lightbox = document.getElementById('image-lightbox');
  const lightboxImage = document.querySelector('.lightbox-image');
  const lightboxClose = document.querySelector('.lightbox-close');
  const lightboxPrev = document.querySelector('.lightbox-prev');
  const lightboxNext = document.querySelector('.lightbox-next');

  function openLightbox(images, startIndex) {
    currentLightboxImages = images;
    currentLightboxIndex = startIndex;
    showLightboxImage(currentLightboxIndex);
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  function showLightboxImage(index) {
    if (currentLightboxImages.length > 0) {
      lightboxImage.style.backgroundImage = currentLightboxImages[index];
    }
  }

  function showNextLightboxImage() {
    currentLightboxIndex = (currentLightboxIndex + 1) % currentLightboxImages.length;
    showLightboxImage(currentLightboxIndex);
  }

  function showPrevLightboxImage() {
    currentLightboxIndex = (currentLightboxIndex - 1 + currentLightboxImages.length) % currentLightboxImages.length;
    showLightboxImage(currentLightboxIndex);
  }

  if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
  }

  if (lightboxPrev) {
    lightboxPrev.addEventListener('click', showPrevLightboxImage);
  }

  if (lightboxNext) {
    lightboxNext.addEventListener('click', showNextLightboxImage);
  }

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;

    if (e.key === 'Escape') {
      closeLightbox();
    } else if (e.key === 'ArrowLeft') {
      showPrevLightboxImage();
    } else if (e.key === 'ArrowRight') {
      showNextLightboxImage();
    }
  });

  const projectDetailPages = document.querySelectorAll('.project-detail-page');
  projectDetailPages.forEach(page => {
    const mainImage = page.querySelector('.award-detail-image-main');
    const smallImages = page.querySelectorAll('.award-detail-image-small');

    const allImages = [];

    if (mainImage) {
      const mainBgImage = window.getComputedStyle(mainImage).backgroundImage;
      allImages.push(mainBgImage);

      mainImage.addEventListener('click', () => {
        openLightbox(allImages, 0);
      });
    }

    smallImages.forEach((img, index) => {
      const bgImage = window.getComputedStyle(img).backgroundImage;
      allImages.push(bgImage);

      img.addEventListener('click', () => {
        openLightbox(allImages, index + 1);
      });
    });
  });
});
