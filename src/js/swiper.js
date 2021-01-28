// Initialize Swiper
var swiper = new Swiper('.services__slider', {
    slidesPerView: 1.2,
    spaceBetween: 16,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    
    breakpoints: {
        1024: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 12
        },
        580: {
            slidesPerView: 1.2,
            spaceBetween: 12
        }
    }
});

// Initialize Swiper2
var swiper2 = new Swiper('.coaches__slider', {
    slidesPerView: 1.2,
    spaceBetween: 16,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    
    breakpoints: {
        1024: {
            slidesPerView: 1.98,
            spaceBetween: 16,
            pagination: {
                type: 'fraction',
            },
        },
        768: {
            slidesPerView: 1.2,
            spaceBetween: 11,
        },
        580: {
            slidesPerView: 1.05,
            spaceBetween: 11
        }
    }
});