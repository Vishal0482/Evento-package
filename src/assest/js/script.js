// Active Class JS
function toggleActive(Id, db) {
  var element = document.querySelector(Id);
  element.classList.toggle(db);
}
function addActive(Id, db) {
  var element = document.querySelector(Id);
  element.classList.add(db);
}
function removeActive(Id, db) {
  var element = document.querySelector(Id);
  element.classList.remove(db);
}

// 
$(document).ready(function () {
  $('.teb-holder button').click(function () {
    var tab_id = $(this).attr('data-tab');
    $('.teb-holder button').removeClass('active');
    $('.tab-main').removeClass('active');
    $(this).addClass('active');
    $("#" + tab_id).addClass('active');
  });
});

var $titleTab = $('.title_tab');
$('.title_tab.active').next('.inner_content').slideDown();
$titleTab.on('click', function(e) {  
e.preventDefault();  
  if ( $(this).hasClass('active') ) {
    $(this).removeClass('active');
    $(this).next().stop().slideUp(500);
    $(this).next().find('p').removeClass('show');
  } else {
    $(this).addClass('active');
    $(this).next().stop().slideDown(500);
    $(this).parent().siblings().children('.title_tab').removeClass('active');
    $(this).parent().siblings().children('.inner_content').slideUp(500);
    $(this).parent().siblings().children('.inner_content').find('p').removeClass('show');
    $(this).next().find('p').addClass('show');
  }
});

// gallery slider 

var galleryTop = new Swiper('.gallery-top', {
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
   // loop: true,
  loopedSlides: 4
});
var galleryThumbs = new Swiper('.gallery-thumbs', {
  spaceBetween: 10,
  centeredSlides: true,
  slidesPerView: 'auto',
  touchRatio: 0.2,
  slideToClickedSlide: true,
  // loop: true,
  loopedSlides: 4
});
galleryTop.controller.control = galleryThumbs;
galleryThumbs.controller.control = galleryTop;