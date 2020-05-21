$(function () {
//фиксированная шапка
    let menu = $("#menu");
    let about = $("#about")
    let aboutH = about.innerHeight();
    let scrollPos = $(window).scrollTop();

    checkScroll(scrollPos, aboutH)

    $(window).on("scroll", function () {
        aboutH = about.innerHeight();
        scrollPos = $(this).scrollTop();

        checkScroll(scrollPos, aboutH);
    });

    function checkScroll(scrollPos, aboutH) {
        if (scrollPos > aboutH) {
            menu.addClass("fixed");
        } else {
            menu.removeClass("fixed")
        }
    }
})