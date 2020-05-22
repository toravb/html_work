$(function () {
    //плавный скролл
    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

        let blockId = $(this).data('scroll'),
            blockOffset = $(blockId).offset().top;

        $("html, body").animate({
            scrollTop: blockOffset
        }, 500)
    })

    //скролл
    // let lastScrollTop = 0;
    // $(window).scroll(function(event){
    //     let st = $(this).scrollTop();
    //     if (st > lastScrollTop){
    //         if (st < 200) {
    //             window.scrollTo({
    //                 top: 200,
    //                 behavior: "smooth"
    //             });
    //         }
    //         if (st > 200) {
    //             window.scrollTo({
    //                 top: 1250,
    //                 behavior: "smooth"
    //             });
    //         }
    //     }else {
    //         if (st < 1200 && st > 200) {
    //             window.scrollTo({
    //                 top: 200,
    //                 behavior: "smooth"
    //             });
    //         }
    //         if (st < 200) {
    //             window.scrollTo({
    //                 top: 0,
    //                 behavior: "smooth"
    //             });
    //         }
    //     }
    //     lastScrollTop = st;
    // });
});

