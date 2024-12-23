$(document).ready(function () {
  var mv = new Swiper(".mv", {

    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: true,
  });

  $(".tab-cont .cont").hide();

  $(".tab-btn li").eq(0).addClass("active");
  $(".tab-cont .cont").eq(0).show();

  $(".tab-btn li").click(function () {
    $(this).addClass("active").siblings().removeClass("active");

    var indexNum = $(this).index();
    $(".tab-cont .cont").eq(indexNum).show().siblings().hide();
  })

  var tabInside = new Swiper(".sw1 .tab-inside", {
    slidesPerView: 2.5,
    spaceBetween: 40,
    // centeredSlides: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    loop: true,
  });
  var tabInside = new Swiper(".sw2 .tab-inside", {
    slidesPerView: 2.5,
    spaceBetween: 40,
    // centeredSlides: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    loop: true,
  });
  var tabInside = new Swiper(".sw3 .tab-inside", {
    slidesPerView: 2.5,
    spaceBetween: 40,
    // centeredSlides: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    loop: true,
  });
})