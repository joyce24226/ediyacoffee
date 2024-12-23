$(document).ready(function(){
  
    AOS.init();
    $(window).on('load', function () {
        AOS.refresh();
    })

        // 원형 그래프 애니메이션 함수
        function animateCircle(id, targetPercentage, duration) {
            let circle = document.querySelector(`#${id} circle:nth-child(2)`);
            let center = document.getElementById("center" + id.charAt(id.length - 1));
    
            let radius = circle.r.baseVal.value;
            let circumference = 2 * Math.PI * radius;
            let offset = circumference;
            circle.style.strokeDasharray = circumference;
            circle.style.strokeDashoffset = offset;
    
            let start = 0;
            let step = targetPercentage / (duration / 100);
    
            function update() {
              if (start <= targetPercentage) {
                let offset = circumference - (start / 100) * circumference;
                circle.style.strokeDashoffset = offset;
    
                // 숫자 뒤에 % 추가
                center.innerText = Math.floor(start) + " %";
                start += step;
                requestAnimationFrame(update);
              }
            }
    
            update();
          }
    
          // Intersection Observer 설정
          function setupObserver(id, targetPercentage, duration) {
            const element = document.getElementById(id + '-wrap'); // 원형 그래프를 감싸는 div
    
            const observer = new IntersectionObserver((entries, observer) => {
              entries.forEach(entry => {
                console.log(entry.isIntersecting); // 디버깅: console로 상태 확인
                if (entry.isIntersecting) {
                  // 애니메이션 시작
                  animateCircle(id, targetPercentage, duration);
                  element.style.opacity = 1; // 그래프가 보일 때 opacity를 1로 설정 (보이게)
                  observer.unobserve(entry.target); // 애니메이션이 시작되면 더 이상 감지하지 않음
                }
              });
            }, {
              threshold: 0.5 // 50% 이상 화면에 보일 때 애니메이션 시작
            });
    
            observer.observe(element); // 감지 시작
          }
    
          // 각 원형 그래프에 대해 Intersection Observer 설정
          setupObserver('circle1', 41, 5000); // 첫 번째 원형 그래프 (40%)
          setupObserver('circle2', 21, 5000); // 두 번째 원형 그래프 (20%)
          setupObserver('circle3', 41, 5000); // 세 번째 원형 그래프 (40%)

})