$(document).ready(function () {

    var btnNext = document.querySelectorAll('.btn-next');
    for (let i = 0; i < btnNext.length; i++) {
        btnNext[i].addEventListener('click', function (e) {
            console.log('click');
        });
    }


    // swiper
    var swiper = new Swiper ('.swiper-container', {
        slidesToView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            type: "bullets",
            clickable: true,
        },
    });
    
    // counter
    var isAnimated = false;
    var counters = $('.happiness-items__count');
    var counter = [];

    for (i = 0; i < counters.length; i++) {
        counter[i] = +counters[i].dataset.value;
    }

    var count = function(start, value, id) {
        setInterval(() => {
            if (start < value) {
                start++;
                counters[id].innerHTML = start;
            }
        }, 10);
    }

    // function counter
    function startCounter() {
        var offsetTop = $('.happiness').offset().top;
        if (isAnimated === false && $(window).scrollTop() + 900 > offsetTop) {
            for (j = 0; j < counters.length; j++) {
                count(0, counter[j], j);
            }
            isAnimated = true;
        }
    }
    // event
    $(window).scroll(startCounter);


    // scroll menu
    const scrollElem = $('.header-wrapper__nav ul li a');

    function scrollToSection(e) {
        let target = $(this).attr('href');
        let dist = $(target).offset().top;
        $('html, body').animate({scrollTop: dist}, 1000, 'swing');
    }
    scrollElem.on('click', scrollToSection);

    
    // scroll to bottom
    $('.btn-hire').click(() => {
        $('html, body').animate({
            scrollTop: $('.footer').offset().top
        }, 1000);
    });

    // scroll to top
    $('.footer-btn-top').click(() => {
        $('html, body').animate({
            scrollTop: $('html').offset().top
        }, 1000)
    });

    //
    $('.btn__menu').click(function(){
		$('.header-wrapper__nav ul').slideToggle();
		$('.btn_row').toggleClass('active');
	});
 
});