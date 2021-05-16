export const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 6,
    infinite: false,
    slidesToScroll: 3,
    initialSlide: 0,
    margin: 5,
    responsive: [
        {
            breakpoint: 1366,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 2,
                initialSlide: 1

            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,


            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};