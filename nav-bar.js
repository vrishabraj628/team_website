document.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.nav .menu');
  const hamburger = document.querySelector('.nav .menu .hamburger');

  menu.addEventListener('click', () => {
    hamburger.classList.toggle('active');
  });
});
