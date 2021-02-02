$(document).ready(function () {

    // payease expand
    $(".payeasecard").click(function () {

        $(this).addClass("active");
        if ($(".payeasecard").hasClass("active")) {
            $(".payeasecard").find(".drop-sec").slideUp();
            $(".payeasecard").find(".chk").removeClass("chked");
            $(".payeasecard").removeClass("active");
            $(this).addClass("active");
            $(this).find(".drop-sec").slideDown();
            $(this).find(".chk").addClass("chked");
        }
    });
    // side nav section
    $(".paybx .sidenav li").click(function () {
        $(".sidenav li").removeClass("active");
        $(this).addClass("active");

        if ($(".cc").hasClass("active")) {
            $(".cc-form-sec").show();
            $(".ease-form-sec").hide();
        } else if ($(".ease").hasClass("active")) {
            $(".cc-form-sec").hide();
            $(".ease-form-sec").show();
        }
    });

    $(".paybx-responsive .sidenav li").click(function () {
        $(".sidenav li").removeClass("active");
        $(this).addClass("active");

        if ($(".cc").hasClass("active")) {
            $(".cc-form-sec").slideDown();
            $(".ease-form-sec").slideUp();
        } else if ($(".ease").hasClass("active")) {
            $(".cc-form-sec").slideUp();
            $(".ease-form-sec").slideDown();
        }
    });


});