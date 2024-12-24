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
// 탭 초기 설정
$(".tab-cont .cont").hide(); // 모든 탭 내용 숨김
$(".tab-btn li").eq(0).addClass("active"); // 첫 번째 탭 활성화
$(".tab-cont .cont").eq(0).show(); // 첫 번째 탭 내용 표시

// Swiper 인스턴스 저장용 변수
let swipers = {};

// 탭 전환 기능
$(".tab-btn li").click(function () {
    $(this).addClass("active").siblings().removeClass("active");

    var indexNum = $(this).index();
    $(".tab-cont .cont").eq(indexNum).show().siblings().hide();

    // Swiper 재초기화
    initializeSwiper(indexNum);
});

// Swiper 초기화 함수
function initializeSwiper(index) {
    const tabClasses = ["sw1", "sw2", "sw3"]; // 탭 클래스 배열
    const targetClass = `.${tabClasses[index]} .tab-inside`;

    // Swiper가 이미 초기화된 경우 삭제
    if (swipers[index]) {
        swipers[index].destroy(true, true);
    }

    // 새로운 Swiper 생성
    swipers[index] = new Swiper(targetClass, {
        slidesPerView: 2.5,
        spaceBetween: 40,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        loop: true,
    });
}

// 처음 Swiper 초기화
initializeSwiper(0);




})