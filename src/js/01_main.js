function infoSlider() {
    var swiper = new Swiper('.info .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        navigation: {
            nextEl: '.info .swiper-button-next',
            prevEl: '.info .swiper-button-prev',
        }
    })
}

function conceptSlider() {
    var swiper = new Swiper('.concept .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 35,
        speed: 1000,
        autoplay: {
            delay: 3000,
        },
    })
    swiper.on('slideChange', function() {
        const index_currentSlide = swiper.realIndex;
        const currentSlide = swiper.slides[index_currentSlide]
        let top = +$(currentSlide).attr("data-marker-top")
        let right = +$(currentSlide).attr("data-marker-right")
        $(".concept__img-marker").css("right", `${right}%`)
        $(".concept__img-marker").css("top", `${top}%`)
    });
}

function outcomeSlider() {
    var swiper = new Swiper('.outcome .swiper-container', {
        slidesPerView: 2,
        spaceBetween: 30,
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 30
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 30
            },
        }
    })
}

function knowSlider() {
    var swiper = new Swiper('.know .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 37,
        speed: 1000,
        autoplay: {
            delay: 3000,
        },
        pagination: {
            el: '.know .swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            500: {
                slidesPerView: 1.3,
                spaceBetween: 20
            },
            576: {
                slidesPerView: 1.5,
                spaceBetween: 20
            },
            650: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            830: {
                slidesPerView: 2.5,
                spaceBetween: 20
            },
            992: {
                slidesPerView: 1,
                spaceBetween: 37
            },
        }
    })
}

function deviceSlider() {
    var swiper = new Swiper('.device .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 37,
        speed: 1000,
        autoplay: {
            delay: 3000,
        },
        pagination: {
            el: '.device .swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
    })
}

function accessorySlider() {
    var swiper = new Swiper('.accessory .swiper-container', {
        slidesPerView: 4,
        spaceBetween: 23,
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            450: {
                slidesPerView: 1.3,
            },
            550: {
                slidesPerView: 1.6,
            },
            650: {
                slidesPerView: 2,
            },
            900: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            },
        }
    })
}


$(document).ready(function() {
    infoSlider()
    conceptSlider()
    knowSlider()
    deviceSlider()
    accessorySlider()

    if (window.innerWidth < 992) {
        outcomeSlider()
    }



    $('.video').parent().click(function() {
        if ($(this).children(".video").get(0).paused) {
            $(this).children(".video").get(0).play();
            $(this).children(".playpause").fadeOut();
        } else {
            $(this).children(".video").get(0).pause();
            $(this).children(".playpause").fadeIn();
        }
    });
});