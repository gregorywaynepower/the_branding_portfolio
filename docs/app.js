const menuBtn = document.querySelector('.menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');

const toggleMobileMenu = () => mobileMenu.classList.toggle('active');

menuBtn.addEventListener('click', toggleMobileMenu);

window.addEventListener('mouseup', function(event) {
  if (mobileMenu.classList.contains('active') && event.target !== mobileMenu) {
    if (!event.target.classList.contains('fa-bars')) {
      toggleMobileMenu();
    }
  }
});