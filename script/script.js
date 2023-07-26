var swiper = new Swiper('.swiper-container', {

    slidesPerView: 'auto',	// 화면에 보여주는 이미지 개수
    //css에 따라서 자동으로 어떻게 몇 개 보여질 지 정해진다.
    autoplay:true,
    loop: false,	// 무한 루프 적용
    pagination: {	// 하단에 점 표시 적용
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {	// 좌우 화살표 적용
        nextEl: '.next',
        prevEl: '.prev',
    },
    effect: 'slide', // slide, fade, cube, coverflow, flip
    speed: 1000
});