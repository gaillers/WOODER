"use strict";

var rellax = new Rellax('.rellax'); // Animation Header | Main

document.addEventListener("DOMContentLoaded", function (event) {
  window.addEventListener('load', function (e) {
    document.body.style.display = "block";
    document.body.style.opacity = '1';
    var tl = new TimelineMax();
    tl.staggerFrom('.left-bg', 2, {
      opacity: 1,
      y: -500,
      ease: Power2.easeOut
    }, 0.2);
    tl.staggerFrom('.right-bg', 2, {
      opacity: 1,
      x: 400,
      ease: Power2.easeOut
    }, 0.2, "-=2");
    tl.staggerFrom('.left-container__main-page', 2, {
      opacity: 0,
      x: -100,
      ease: Power2.easeInOut
    }, 0.2, "-=2");
    tl.staggerFrom('.left-container__dots-wrapper', 2, {
      opacity: 0,
      x: -100,
      ease: Power2.easeInOut
    }, 0.2, "-=2");
    tl.staggerFrom('.right-container__main-text', 2, {
      opacity: 0,
      y: 100,
      ease: Power2.easeInOut
    }, 0.2, "-=2");
    tl.staggerFrom('.wrapper-nav', 2, {
      opacity: 0,
      y: -100,
      ease: Power2.easeInOut
    }, 0.2, "-=2");
    tl.staggerFrom('.centre__main-title', 2, {
      opacity: 0,
      y: -150,
      ease: Power2.easeInOut
    }, 0.2, "-=2");
    tl.staggerFrom('.centre', 2, {
      opacity: 0,
      y: -150,
      ease: Power2.easeInOut
    }, 0.2, "-=2");
    tl.staggerFrom('.centre__main-mouse', 2, {
      opacity: 1,
      y: 500,
      ease: Power2.easeInOut
    }, 0.2, "-=2");
  }, false);
});
var scrolled; // Header > Wrapper-nav

window.onscroll = function () {
  scrolled = window.pageYOffset || document.documentElement.scrollTop;

  if (scrolled > 700) {
    $('.wrapper-nav').css({
      background: 'rgba(0, 0, 0, 0.88)',
      boxShadow: 'rgba(0, 0, 0, 0.2) 0px 0px 15px'
    });
  } else if (scrolled > 600) {
    $('.wrapper-nav').css({
      background: 'rgba(0, 0, 0, 0.77)',
      boxShadow: 'rgba(0, 0, 0, 0.2) 0px 0px 15px'
    });
  } else if (scrolled > 500) {
    $('.wrapper-nav').css({
      background: 'rgba(0, 0, 0, 0.66)',
      boxShadow: 'rgba(0, 0, 0, 0.2) 0px 0px 15px'
    });
  } else if (scrolled > 400) {
    $('.wrapper-nav').css({
      background: 'rgba(0, 0, 0, 0.55)',
      boxShadow: 'rgba(0, 0, 0, 0.2) 0px 0px 15px'
    });
  } else if (scrolled > 300) {
    $('.wrapper-nav').css({
      background: 'rgba(0, 0, 0, 0.44)',
      boxShadow: 'rgba(0, 0, 0, 0.2) 0px 0px 15px'
    });
  } else if (scrolled > 200) {
    $('.wrapper-nav').css({
      background: 'rgba(0, 0, 0, 0.33)',
      boxShadow: 'rgba(0, 0, 0, 0.2) 0px 0px 15px'
    });
  } else if (scrolled > 150) {
    $('.wrapper-nav').css({
      background: 'rgba(0, 0, 0, 0.22)',
      boxShadow: 'rgba(0, 0, 0, 0.2) 0px 0px 15px'
    });
  } else if (scrolled > 100) {
    $('.wrapper-nav').css({
      background: 'rgba(0, 0, 0, 0.11)',
      boxShadow: 'rgba(0, 0, 0, 0.2) 0px 0px 15px'
    });
  } else if (scrolled > 50) {
    $('.wrapper-nav').css({
      background: 'rgba(0, 0, 0, 0.05)',
      boxShadow: 'rgba(0, 0, 0, 0.2) 0px 0px 15px'
    });
  }

  if (50 > scrolled) {
    $('.wrapper-nav').css({
      background: 'rgba(0, 0, 0, 0)',
      boxShadow: 'rgba(0, 0, 0, 0.0) 0px 0px 0px'
    });
  }
};

$(function () {
  scroll; // scroll Nav & Siderbar

  $('a[href^="#home"]').click(function () {
    var target = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, 1000);
    return false;
  });
  $('a[href^="#furniture"]').click(function () {
    var target = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(target).offset().top - 300
    }, 1000);
    return false;
  });
  $('a[href^="#videoContainer"]').click(function () {
    var target = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(target).offset().top - 70
    }, 1000);
    return false;
  });
  $('a[href^="#aboutUs"]').click(function () {
    var target = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, 1000);
    return false;
  });
});
var circleOne = document.getElementById('circle one');
var circleTwo = document.getElementById('circle two');
var circleThree = document.getElementById('circle three');
var circleFour = document.getElementById('circle four');
document.addEventListener("scroll", function () {
  scroll = window.scrollY;
  console.log(scroll);
  var counter = document.getElementById('counter');

  if ($(window).width() < 1900) {
    if (scroll <= 600) {
      screen = 'header';
    } // Screen
    else if (scroll >= 490 && scroll <= 1900) {
        screen = 'main';
      } else if (scroll >= 1950 && scroll <= 3000) {
        screen = 'quality';
      } else if (scroll >= 3300) {
        screen = 'aboutus';
      }
  } else {
    if (scroll <= 650) {
      screen = 'header';
    } else if (scroll >= 650 && scroll <= 1900) {
      screen = 'main';
    } else if (scroll >= 2050 && scroll <= 3556) {
      screen = 'quality';
    } else if (scroll >= 3570) {
      screen = 'aboutus';
    }
  } // Dots


  if (screen === 'header') {
    counter.innerText = '01';
    circleOne.style.opacity = '1', circleOne.style.backgroundColor = '#bea67c';
    circleTwo.style.opacity = '.5', circleTwo.style.backgroundColor = '#303030';
    circleThree.style.opacity = '.5', circleThree.style.backgroundColor = '#303030';
    circleFour.style.opacity = '.5', circleFour.style.backgroundColor = '#303030';
  }

  if (screen === 'main') {
    counter.innerText = '02';
    circleOne.style.opacity = '.5', circleOne.style.backgroundColor = '#303030';
    circleTwo.style.opacity = '1', circleTwo.style.backgroundColor = '#bea67c';
    circleThree.style.opacity = '.5', circleThree.style.backgroundColor = '#303030';
    circleFour.style.opacity = '.5', circleFour.style.backgroundColor = '#303030';
  }

  if (screen === 'quality') {
    counter.innerText = '03';
    circleOne.style.opacity = '.5', circleOne.style.backgroundColor = '#303030';
    circleTwo.style.opacity = '.5', circleTwo.style.backgroundColor = '#303030';
    circleThree.style.opacity = '1', circleThree.style.backgroundColor = '#bea67c';
    circleFour.style.opacity = '.5', circleFour.style.backgroundColor = '#303030';
  }

  if (screen === 'aboutus') {
    counter.innerText = '04';
    circleOne.style.opacity = '.5', circleOne.style.backgroundColor = '#303030';
    circleTwo.style.opacity = '.5', circleTwo.style.backgroundColor = '#303030';
    circleThree.style.opacity = '.5', circleThree.style.backgroundColor = '#303030';
    circleFour.style.opacity = '1', circleFour.style.backgroundColor = '#bea67c';
  }
});