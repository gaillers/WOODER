let rellax = new Rellax('.rellax'); // Animation Header | Main
document.addEventListener("DOMContentLoaded", function(event) {

	window.addEventListener('load', function(e) {
		document.body.style.display = "block";
		document.body.style.opacity = '1';
        
    let tl = new TimelineMax();
    tl.staggerFrom('.left-bg', 2, {
			opacity: 1,
			y: -500,
			ease: Power2.easeOut
    }, 0.2)
		tl.staggerFrom('.right-bg', 2, {
			opacity: 1,
			x: 400,
			ease: Power2.easeOut
    }, 0.2,"-=2")
    tl.staggerFrom('.left-container__main-page', 2, {
			opacity: 0  ,
			x: -100,
			ease: Power2.easeInOut
    }, 0.2,"-=2")
    tl.staggerFrom('.left-container__dots-wrapper', 2, {
			opacity: 0  ,
			x: -100,
			ease: Power2.easeInOut
    }, 0.2,"-=2")
    tl.staggerFrom('.right-container__main-text', 2, {
			opacity: 0  ,
			y: 100,
			ease: Power2.easeInOut
		}, 0.2,"-=2")
    tl.staggerFrom('.wrapper-nav', 2, {
			opacity: 0  ,
			y: -100,
			ease: Power2.easeInOut
		}, 0.2,"-=2")
    tl.staggerFrom('.centre__main-title', 2, {
			opacity: 0,
			y: -150,
			ease: Power2.easeInOut
    }, 0.2,"-=2")
    tl.staggerFrom('.centre', 2, {
			opacity: 0,
			y: -150,
			ease: Power2.easeInOut
    }, 0.2,"-=2")
    tl.staggerFrom('.centre__main-mouse', 2, {
			opacity: 1,
			y: 500,
			ease: Power2.easeInOut
    }, 0.2,"-=2")
	},false);
})
let scrolled; // Header > Wrapper-nav
window.onscroll = function () {
  scrolled = window.pageYOffset || document.documentElement.scrollTop;
  if (scrolled > 700) {
    $('.wrapper-nav').css({ background: 'rgba(0, 0, 0, 0.88)', boxShadow: 'rgba(0, 0, 0, 0.2) 0px 0px 15px' });
  } else if (scrolled > 600) {
   $('.wrapper-nav').css({ background: 'rgba(0, 0, 0, 0.77)', boxShadow: 'rgba(0, 0, 0, 0.2) 0px 0px 15px' });
  }else if (scrolled > 500) {
   $('.wrapper-nav').css({ background: 'rgba(0, 0, 0, 0.66)', boxShadow: 'rgba(0, 0, 0, 0.2) 0px 0px 15px' });
  }else if (scrolled > 400) {
   $('.wrapper-nav').css({ background: 'rgba(0, 0, 0, 0.55)', boxShadow: 'rgba(0, 0, 0, 0.2) 0px 0px 15px' });
  }else if (scrolled > 300) {
   $('.wrapper-nav').css({ background: 'rgba(0, 0, 0, 0.44)', boxShadow: 'rgba(0, 0, 0, 0.2) 0px 0px 15px' });
  } else if (scrolled > 200) {
   $('.wrapper-nav').css({ background: 'rgba(0, 0, 0, 0.33)', boxShadow: 'rgba(0, 0, 0, 0.2) 0px 0px 15px' });
  }else if (scrolled > 150) {
   $('.wrapper-nav').css({ background: 'rgba(0, 0, 0, 0.22)', boxShadow: 'rgba(0, 0, 0, 0.2) 0px 0px 15px' });
  }else if (scrolled > 100) {
   $('.wrapper-nav').css({ background: 'rgba(0, 0, 0, 0.11)', boxShadow: 'rgba(0, 0, 0, 0.2) 0px 0px 15px' });
  }else if (scrolled > 50) {
   $('.wrapper-nav').css({ background: 'rgba(0, 0, 0, 0.05)', boxShadow: 'rgba(0, 0, 0, 0.2) 0px 0px 15px' });
  }if (50 > scrolled) {
    $('.wrapper-nav').css({ background: 'rgba(0, 0, 0, 0)', boxShadow: 'rgba(0, 0, 0, 0.0) 0px 0px 0px' });
  }
};
$(function(){  scroll // scroll Nav & Siderbar
  $('a[href^="#home"]').click(function(){
     var target = $(this).attr('href');
     $('html, body').animate({scrollTop: $(target).offset().top}, 1000);
     return false;
  });$('a[href^="#furniture"]').click(function(){
    var target = $(this).attr('href');
    $('html, body').animate({scrollTop: $(target).offset().top-300}, 1000);
    return false;
  });$('a[href^="#videoContainer"]').click(function(){
    var target = $(this).attr('href');
    $('html, body').animate({scrollTop: $(target).offset().top-70}, 1000);
    return false;
  });$('a[href^="#aboutUs"]').click(function(){
    var target = $(this).attr('href');
    $('html, body').animate({scrollTop: $(target).offset().top}, 1000);
    return false;
  });
});
