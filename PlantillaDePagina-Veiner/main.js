// main.js - interactividad ligera

document.addEventListener('DOMContentLoaded', function () {
  // Smooth scroll for on-page anchors
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId.length > 1 && document.querySelector(targetId)) {
        e.preventDefault();
        document.querySelector(targetId).scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Back-to-top / floating button behavior
  var backBtn = document.querySelector('.boton-flotante');
  if (backBtn) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 300) {
        backBtn.classList.add('visible');
      } else {
        backBtn.classList.remove('visible');
      }
    });

    backBtn.addEventListener('click', function (e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Close mobile menu when a menu link is clicked (if using checkbox technique)
  var menuLinks = document.querySelectorAll('.menu-principal a');
  var menuCheckbox = document.getElementById('menu-toggle');
  menuLinks.forEach(function (a) {
    a.addEventListener('click', function () {
      if (menuCheckbox && window.getComputedStyle(document.querySelector('.boton-menu-movil')).display !== 'none') {
        menuCheckbox.checked = false;
      }
    });
  });

  // Highlight active menu item based on section in view (simple)
  var sections = document.querySelectorAll('section[id]');
  function activateMenuOnScroll() {
    var scrollPos = window.scrollY + 120; // offset for fixed nav
    sections.forEach(function (sec) {
      var top = sec.offsetTop;
      var height = sec.offsetHeight;
      var id = sec.getAttribute('id');
      var menuLink = document.querySelector('.menu-principal a[href$="#' + id + '"]');
      if (menuLink) menuLink.classList.remove('activo');
      if (scrollPos >= top && scrollPos < top + height) {
        var activeLink = document.querySelector('.menu-principal a[href$="#' + id + '"]');
        if (activeLink) activeLink.classList.add('activo');
      }
    });
  }
  window.addEventListener('scroll', activateMenuOnScroll);
  activateMenuOnScroll();

  // Small hero animation (fade-in)
  var hero = document.querySelector('.contenido-hero, .contenido-hero-nosotros');
  if (hero) {
    hero.style.opacity = 0;
    hero.style.transition = 'opacity 0.8s ease';
    setTimeout(function () { hero.style.opacity = 1; }, 100);
  }
});
