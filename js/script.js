$(function () {
    let menu = $("#menu");
    let about = $("#about");
    let aboutH = about.innerHeight();
    let scrollPos = $(window).scrollTop();

    checkScroll(scrollPos, aboutH);

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
    //плавный скролл
    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

        let blockId = $(this).data('scroll'),
            blockOffset = $(blockId).offset().top;

        $("html, body").animate({
            scrollTop: blockOffset
        }, 700)
    });
    //скролл
    /*
    let anchors = [];
    let currentAnchor = -1;
    let isAnimating  = false;

    function slide(event) {
        if (isAnimating) {
            return false;
        }
        isAnimating = true;
        if (event.originalEvent.wheelDelta >= 0) {
            currentAnchor--;
        } else {
            currentAnchor++;
        }
        if (currentAnchor > (anchors.length - 1)
            || currentAnchor < 0) {
            currentAnchor = 0;
        }
        isAnimating = true;
        $('html, body').animate({
            scrollTop: parseInt(anchors[currentAnchor])
        }, 700, function () {
            isAnimating = false;
        });
    }

    function updateAnchors() {
        anchors = [];
        $('.anchor').each(function (i, element) {
            anchors.push($(element).offset().top);
        });

    }
    $('body').on('mousewheel', function(event) {

        slide(event);

    });
    updateAnchors();
    
    window.addEventListener('scroll mousewheel', e => e.preventDefault(), { passive: false });
    document.addEventListener('mousewheel', e => e.preventDefault(), { passive: false });*/

});

