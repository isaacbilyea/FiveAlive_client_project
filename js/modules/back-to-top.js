export function backToTop() {
  //VARIABLES
  const backToTopButton = document.querySelector('.back-to-top');

  //FUNCTIONS
  function toggleBackToTop() {
    if (window.scrollY > 300) {
      backToTopButton.classList.add('show');
    } else {
      backToTopButton.classList.remove('show');
    }
  }

  function scrollToTop() {
    gsap.to(window, {
      duration: 0.8,
      scrollTo: { y: 0 },
      ease: "power2.inOut"
    });
  }
  
  toggleBackToTop();
  
  //EVENT LISTENERS
  window.addEventListener('scroll', toggleBackToTop);
  backToTopButton.addEventListener('click', scrollToTop);
}