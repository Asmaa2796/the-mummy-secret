/*global $*/
$(function () {
  "use strict";
 
  $(window).scroll(function () {
    if ($(window).scrollTop() >= 100) {
      $(".scrollUp").fadeIn();
      $(".navbar").addClass("fixed-top");
      $(".navbar").addClass("shadow");
      $(".navbar").css("padding", "10px 0");
    } else {
      $(".navbar").removeClass("fixed-top");
      $(".navbar").removeClass("shadow");
      $(".navbar").css("padding", "15px 0");
      $(".scrollUp").fadeOut();
    }
  });
  $(".scrollUp").click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });
   // Show loader as soon as possible (before window loads)
    $(document).ready(function () {
      $(".loading").show().delay(1000).fadeOut(1000);
    });

    // Hide loader after everything finishes loading
    $(window).on("load", function () {
      $(".loading").show().delay(1000).fadeOut(1000);
    });
});

  document.querySelectorAll('a[data-scroll]').forEach(link => {
  link.addEventListener('click', function (e) {
    const sectionId = this.getAttribute('data-scroll');
    const navbarCollapse = $('#navbarSupportedContent'); // jQuery element
    const navbarToggler = document.querySelector('.navbar-toggler');
    const offset = 80; // adjust based on navbar height

    // If already on index.html
    if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/') {
      e.preventDefault();
      const section = document.getElementById(sectionId);
      if (section) {
        const elementTop = section.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: elementTop, behavior: 'smooth' });

        // ✅ Close navbar in mobile view after scroll
        if (window.innerWidth < 992) {
          setTimeout(() => {
            if (navbarCollapse.hasClass('show')) {
              navbarCollapse.collapse('hide');
            } else if (navbarToggler && navbarToggler.offsetParent !== null) {
              navbarToggler.click();
            }
          }, 600); // wait for scroll animation
        }
      }
    } else {
      // If on another page — navigate to index.html with hash
      e.preventDefault();
      window.location.href = `index.html#${sectionId}`;
    }
  });
});

  window.addEventListener('load', () => {
    if (window.location.hash) {
      const section = document.querySelector(window.location.hash);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      }
    }
  });
