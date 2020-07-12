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
$("body").niceScroll({
  cursorcolor: "#eecf9b",
  cursorwidth: "5px",
  cursorborder: "none",
  zindex: "auto",
  scrollspeed: 100,
  autohidemode: false,
  enablekeyboard: false,
  horizrailenabled: false,
  touchactive: false
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
$('.burger').on('click', function () {
  // open sidebar
  $('.sidebar').toggleClass('sidebar-open');
});
$('.close-sidebar').not('.sidebar').click(function () {
  // close sidebar
  $('.sidebar').removeClass('sidebar-open');
}); // Popup 

var informationToggle = false;
$('#infoIcon').click(function () {
  if (!informationToggle) {
    $('#popupContent').css({
      'height': '162px',
      'opacity': '1',
      'visibility': 'visible'
    });
    informationToggle = true;
  } else {
    $('#popupContent').css({
      'height': '0',
      'opacity': '0'
    });
    informationToggle = false;
  }

  ;
}); // Language 

var languageToggle = false;
var chosenLanguage = 'EN';
$(".language").click(function () {
  if (!languageToggle) {
    $('.wrapper-nav').css('height', '71px');
    $(".russian").css({
      "margin-top": "1.7em",
      "opacity": "1"
    });
    $(".ukrainian").css({
      "margin-top": ".5em",
      "opacity": "1"
    });
    $(".russian").mouseover(function () {
      $('.russian').css('opacity', '.5');
    });
    $(".russian").mouseout(function () {
      $('.russian').css('opacity', '1');
    });
    $(".ukrainian").mouseover(function () {
      $('.ukrainian').css('opacity', '.5');
    });
    $(".ukrainian").mouseout(function () {
      $('.ukrainian').css('opacity', '1');
    });
    $('.language-buttom').css('transform', 'rotate(180deg)');
    languageToggle = true;
  } else {
    $('.wrapper-nav').css('height', '71px');
    $(".russian").css({
      "margin-top": "0",
      "opacity": "0"
    });
    $(".ukrainian").css({
      "margin-top": "0",
      "opacity": "0"
    });
    $(".russian").mouseover(function () {
      $('.russian').css('opacity', '0');
    });
    $(".russian").mouseout(function () {
      $('.russian').css('opacity', '.0');
    });
    $(".ukrainian").mouseover(function () {
      $('.ukrainian').css('opacity', '0');
    });
    $(".ukrainian").mouseout(function () {
      $('.ukrainian').css('opacity', '0');
    });
    $('.language-buttom').css('transform', 'none');
    languageToggle = false;
  }
});

if (!languageToggle) {
  $('.ukrainian').click(function () {
    if ($('.ukrainian').text() === 'UA') {
      $(".english").text('UA');
      $('.russian').text('RU');
      $(".ukrainian").text('EN');
      translateLanguage('ukrainian');
    } else {
      $(".english").text('EN');
      $('.russian').text('RU');
      $(".ukrainian").text('UA');
      translateLanguage('english');
    }
  });
  $('.russian').click(function () {
    if ($('.russian').text() === 'RU') {
      $(".english").text('RU');
      $('.russian').text('EN');
      $(".ukrainian").text('UA');
      translateLanguage('russian');
    } else {
      $(".english").text('EN');
      $('.russian').text('RU');
      $(".ukrainian").text('UA');
      translateLanguage('english');
    }
  });
} // function translateLanguage(language){
// 	if (language === 'ukrainian') {
// 		chosenLanguage = 'UA'
// 		$('#navHome').text('ГОЛОВНА')
// 		$('#navProducts').text('ПРОДУКТИ')
// 		$('#navHowWeWork').text('НАША РОБОТА')
// 		$('#navAbout').text('ПРО НАС')
// 		// if (!aboutCompanyToggle) {
// 		// 	$('#mainLearnMore').text('ЧИТАТИ ЩЕ')
// 		// } else {
// 		// 	$('#mainLearnMore').text('НАЗАД')
// 		// }
// 		$('#menuLabel').text('МЕНЮ')
// 		$("#mainFurnitureAndDecore").text('МЕБЛІ & ДЕКОР')
// 		$("#furnitureHeader").text('МЕБЛІ')
// 		$("#furnitureParagraph").text('Wooder використовує деревину повалених дерев тим самим запобігаючи вірубці лісів. Створюючи речі із меліорового амберу...')
// 		$('.learnMoreButton').text('Читати ще')
// 		$('#scroll').text('ВНИЗ')
// 		$('#infoParagraph').text("Цей веб-сайт надає вам можливість ознайомитись з компанією Wooder, оцінити надані товари та послуги та зробити замовлення.")
// 		$('#infoContacts').text('Ви можете зв’язатися з нами за такими контактами:')
// 		$('#about-company-paragraph-1').text("Компанія Wooder розпочала свою діяльність як сімейний бізнес ще в 1973 році. Засновник Стівен Бартрідж купив деревообробну фабрику після того, як сімейний бізнес здобув міцну репутацію в Бронксі, Нью-Йорк. Фабрика одразу ж почала розширюватися. Вже в 1977 році компанія почала масштабуватися на Сході США.") 
// 		$('#about-company-paragraph-2').text("У 1986 році компанія об'єдналася з іншим великим гравцем у галузі ‒ Ostin Wood Company. Разом вони здобули вирішальний голос у галузі та почали зростати за її межами. Вже в 1990 році Wooder виготовляв 18% американських дерев'яних виробів.")
// 		$('#sidebarHome').text('ГОЛОВНА')
// 		$('#sidebarProducts').text('ПРОДУКТИ')
// 		$('#sidebarHowWeWork').text('НАША РОБОТА')
// 		$('#sidebarAbout').text('ПРО НАС')
// 		$('#furniture-label').text('МЕБЛІ')
// 		$('#decore-label').text('ДЕКОР')
// 		$('#decoreHeader').text('ДЕКОР')
// 		$('#decoreParagraph').text("Ми займаємось всіма видами дерев'яного декорування створюваного архітекторами, інтер'єр дизайнерами, та підрядниками котрі зацікавлені проектом...")
// 		$('#wooderIsQuality').text('WOODER ‒ ЦЕ ЯКІСТЬ')
// 		$('#wooderIsQualityParagraph').text('Ми створюємо унікальні предмети з рідкісного дерева, спеціально під замовлення. Подивіться коротке відео про нашу роботу')
// 		$('#innovativeDesign').text('Інноваційний Дизайн')
// 		$('#highLevelSkills').text('Висококласні Спеціалісти')
// 		$('#qualityProducts').text('Якість Продукції')
// 		$('#weDoTheDesign').text('МИ ВИКОНУЄМО ЗАМОВЛЕННЯ БУДЬ ЯКОЇ СКЛАДНОСТІ')
// 		$('#thisIsATeam').text('Це команда професіоналів, яка робить меблі та декор з дерева найвищого стандарту. Створюючи сучасний дизайн та дотримуючись світових стандартів якості, ми робимо роботу, яку ми любимо')
// 		$('#watchVideo').text('ДИВИТИСЬ ВІДЕО')
// 		$('#aboutUsLabel').text('ПРО НАС')
// 		$('#aboutUsHeader').text('ПРО НАС')
// 		$('#aboutUsParagraph').text('Ми - команда професіоналів з деревообробки та створення дерев’яних меблів вищого класу')
// 	}
// 	else if (language === 'russian'){
// 		chosenLanguage = "RU"
// 		$('#navHome').text('ГЛАВНАЯ')
// 		$('#navProducts').text('ПРОДУКТЫ')
// 		$('#navHowWeWork').text('НАША РАБОТА')
// 		$('#navAbout').text('О НАС')
// 		// if (!aboutCompanyToggle) {
// 		// 	$('#mainLearnMore').text('ЧИТАТИ ЕЩЁ')
// 		// } else {
// 		// 	$('#mainLearnMore').text('НАЗАД')
// 		// }
// 		$('#menuLabel').text('МЕНЮ')
// 		$("#mainFurnitureAndDecore").text('МЕБЕЛЬ & ДЕКОР')
// 		$("#furnitureHeader").text('МЕБЕЛЬ')
// 		$("#furnitureParagraph").text('Wooder использует древесину поваленных деревьев тем самым предотвращая вырубку лесов. Создавая вещи из мелиорового амбера...')
// 		$('.learnMoreButton').text('Читать ещё')
// 		$('#scroll').text('ВНИЗ')
// 		$('#infoParagraph').text("Этот сайт дает вам возможность познакомиться с Wooder, оценить предлагаемые продукты и услуги и сделать заказ.")
// 		$('#infoContacts').text('Вы можете связаться с нами используя следующие контакты:')
// 		$('#about-company-paragraph-1').text("Компания Wooder начала свою деятельность как семейный бизнес еще в 1973 году. Основатель Стивен Бартридж купил деревообрабатывающую фабрику после того, как семейный бизнес получил прочную репутацию в Бронксе, Нью-Йорк. Фабрика сразу же начала расширяться. Уже в 1977 году компания начала масштабироваться на Востоке США.") 
// 		$('#about-company-paragraph-2').text("В 1986 году компания объединилась с другим крупным игроком в отрасли - Ostin Wood Company. Вместе они получили решающий голос в индустрии и начали расти за ее пределами. Уже в 1990 году Вудер изготавливал 18% американских деревянных изделий.")
// 		$('#sidebarHome').text('ГЛАВНАЯ')
// 		$('#sidebarProducts').text('ПРОДУКТЫ')
// 		$('#sidebarHowWeWork').text('НАША РАБОТА')
// 		$('#sidebarAbout').text('О НАС')
// 		$('#furniture-label').text('МЕБЕЛЬ')
// 		$('#decore-label').text('ДЕКОР')
// 		$('#decoreHeader').text('ДЕКОР')
// 		$('#decoreParagraph').text("Мы занимаемся всеми видами древесного декорирования создаваемого архитекторами, итерьер-дизайнерами, и подрядчиками заинтересованными в проекте...")
// 		$('#wooderIsQuality').text('WOODER ‒ ЭТО КАЧЕСТВО')
// 		$('#wooderIsQualityParagraph').text('Мы создаем уникальные предметы из редкой древесины, специально под заказ. Посмотрите короткое видео о нашей работе')
// 		$('#innovativeDesign').text('Инновационный Дизайн')
// 		$('#highLevelSkills').text('Высококлассные Специалисты')
// 		$('#qualityProducts').text('Качество Продукции')
// 		$('#weDoTheDesign').text('МЫ ВЫПОЛНЯЕМ ЗАКАЗЫ ЛЮБОЙ СЛОЖНОСТИ')
// 		$('#thisIsATeam').text('Это команда профессионалов, которая делает мебель и декор из дерева высокого стандарта. Создавая современный дизайн и следуя мировым стандартам качества, мы делаем работу, которую мы любим')
// 		$('#watchVideo').text('СМОТРЕТЬ ВИДЕО')
// 		$('#aboutUsLabel').text('О НАС')
// 		$('#aboutUsHeader').text('О НАС')
// 		$('#aboutUsParagraph').text('Мы команда профессионалов в области деревообработки и создания деревянной мебели высшего класса')
// 	}
// 	else if (language === 'english') {
// 		chosenLanguage = 'EN'
// 		$('#navHome').text('HOME')
// 		$('#navProducts').text('PRODUCTS')
// 		$('#navHowWeWork').text('HOW WE WORK')
// 		$('#navAbout').text('ABOUT')
// 		// if (!aboutCompanyToggle) {
// 		// 	$('#mainLearnMore').text('LEARN MORE')
// 		// } else {
// 		// 	$('#mainLearnMore').text('HIDE')
// 		// }
// 		$('#menuLabel').text('MENU')
// 		$("#mainFurnitureAndDecore").text('FURNOTURE & DECORE')
// 		$("#furnitureHeader").text('FURNOTURE')
// 		$("#furnitureParagraph").text('Wooder utilizes materials otherwise left behind, rendered useless in their original intent. By creating new places made of reclaimed barnwood...')
// 		$('.learnMoreButton').text('LEARN MORE')
// 		$('#scroll').text('SCROLL')
// 		$('#sidebarHome').text('HOME')
// 		$('#sidebarProducts').text('PRODUCTS')
// 		$('#sidebarHowWeWork').text('HOW WE WORK')
// 		$('#sidebarAbout').text('ABOUT')
// 		$('#infoParagraph').text("This website provides you with the ability to get acquainted with the Wooder Company, assess the provided products and services, and make an order.")
// 		$('#infoContacts').text('You can reach the Woorder Company using the following contacts:')
// 		$('#about-company-paragraph-1').text("Wooder started as a small family business back in 1973. The founder, Steven Bartridge, bought a wood-processing factory after the family business gained a solid reputation in Bronx, New York. The factory accelerated the growth of the company immediately. Already in 1977, the company started to scale in the East.") 
// 		$('#about-company-paragraph-2').text("In 1986, the company merged with another big player in the industry: Ostin Wood Company. Together, they gained major voice in the industry and started to grow beyond it. Already in 1990, Wooder produced 18% of American wooden products.")
// 		$('#furniture-label').text('FURNITURE')
// 		$('#decore-label').text('DECORE')
// 		$('#decoreHeader').text('DECORE')
// 		$('#decoreParagraph').text("We make all types of wooden decore as per design by Architect, Interior designer, contractor which is suitable...")
// 		$('#wooderIsQuality').text('WOODER ‒ IS QUALITY')
// 		$('#wooderIsQualityParagraph').text('We create unique objects made of rare wood, specifically under the order. Look at the short video about our work')
// 		$('#innovativeDesign').text('Innovative Design')
// 		$('#highLevelSkills').text('High-Level Skills')
// 		$('#qualityProducts').text('Quality Products')
// 		$('#weDoTheDesign').text('We do the design of any complexity'.toUpperCase())
// 		$('#thisIsATeam').text('This is a team of professionals that make the furniture and wood decore of the highest standard. Creating modern designs and adhering to the global quality standards, we are doing work that we love.')
// 		$('#watchVideo').text('watch video'.toUpperCase())
// 		$('#aboutUsLabel').text('ABOUT US')
// 		$('#aboutUsHeader').text('ABOUT US')
// 		$('#aboutUsParagraph').text('We are a team of professionals in the wood-processing and the creation of wooden furniture of the highest class')
// 	}
// }