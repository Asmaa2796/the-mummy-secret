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

  // Smooth scroll when already on index.html
  document.querySelectorAll('a[data-scroll]').forEach(link => {
    link.addEventListener('click', function (e) {
      const sectionId = this.getAttribute('data-scroll');

      // If already on index.html
      if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/' ) {
        e.preventDefault();
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // If on another page — navigate to index.html with hash
        e.preventDefault();
        window.location.href = `index.html#${sectionId}`;
      }
    });
  });

  // When navigating from another page — scroll after load
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