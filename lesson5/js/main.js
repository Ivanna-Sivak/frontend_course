$(document).ready(() => {
    $('.logo-link, .menu-link').each(function (index, element) {
        // console.log(index, element);
        $(element).click(function () {
            const id = $(this).attr('href');
            // console.log(id);
            const scroll = $(id).offset().top;
            // console.log(scroll);
            $('html').animate({
                scrollTop: scroll
            }, 1000)
        })
    })
})