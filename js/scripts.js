/*!
    * Start Bootstrap - Creative v6.0.4 (https://startbootstrap.com/theme/creative)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
    */
    (function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 72)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 75
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-scrolled");
    } else {
      $("#mainNav").removeClass("navbar-scrolled");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);
// Select the button
const btn = document.querySelector('.btn-toggle');
/* FUTURE FEATURE?:
if (localStorage.themePreferences === "true") {
     var element = document.getElementById("SearchQuery");
   element.addClass("dark-theme");
   var element2 = document.getElementById("mainNav");
   var footer = document.getElementById("footer");
   footer.addClass('dark-theme');
   var newatt = document.createAttribute("style");
   newatt.value = 'background-color: #343a40 !important;';
   element2.setAttributeNode(newatt);
   document.body.addClass('dark-theme');

} else if (localStorage.themePreferences === "false") {
        var element = document.getElementById("SearchQuery");
   element.removeClass("dark-theme");
   var element2 = document.getElementById("mainNav");
   var footer = document.getElementById("footer");
   footer.removeClass('dark-theme');
   element2.removeAttribute("style");
   document.body.removeClass('dark-theme');

}
*/
// Listen for a click on the button
/*       var state = false; */
btn.addEventListener('click', function() {
   var element = document.getElementById("SearchQuery");
   element.classList.toggle("dark-theme");
   var element2 = document.getElementById("mainNav");
   var footer = document.getElementById("footer");
   footer.classList.toggle('dark-theme');
   var newatt = document.createAttribute("style");
   newatt.value = 'background-color: #343a40 !important;';
   element2.toggleAttribute("style");
   if (element2.hasAttribute("style")) {
      element2.setAttribute("style", 'background-color: #4D5358 !important;');
   }
   // Then toggle (add/remove) the .dark-theme class to the body
   document.body.classList.toggle('dark-theme');
   var brand = document.getElementsByClassName('navbar-brand').item(0);
   brand.classList.toggle('navbar-dark');

  /* var element = document.getElementById("SearchQuery");
   element.classList.toggle("dark-theme");
   var element2 = document.getElementById("mainNav");
   var footer = document.getElementById("footer");
   footer.classList.toggle('dark-theme');
   * var newatt = document.createAttribute("style");
   * newatt.value = 'background-color: #343a40 !important;';
   element2.toggleAttribute("style");
   if (element2.hasAttribute("style")) {
      element2.setAttribute("style", 'background-color: #343a40 !important;');
   }
   // Then toggle (add/remove) the .dark-theme class to the body
   document.body.classList.toggle('dark-theme');
   */
   /*if (typeof(Storage) !== "undefined") {
   if (state === true) {
      var stateval = "true";
   }
   if (state === false) {
      stateval = "false";
   }
   localStorage.setItem('themePreferences', stateval)
   .then {
   state = !state;
   };
   } else {
      var element = document.getElementById("SearchQuery");
   element.classList.toggle("dark-theme");
   var element2 = document.getElementById("mainNav");
   var footer = document.getElementById("footer");
   footer.classList.toggle('dark-theme');
   * var newatt = document.createAttribute("style");
   * newatt.value = 'background-color: #343a40 !important;';
   element2.toggleAttribute("style");
   if (element2.hasAttribute("style")) {
      element2.setAttribute("style", 'background-color: #343a40 !important;');
   }
   // Then toggle (add/remove) the .dark-theme class to the body
   document.body.classList.toggle('dark-theme');
   }
*/
})
  // Magnific popup calls
  $('#portfolio').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    }
  })

})(jQuery); // End of use strict
