$(document).ready(function () {

    // payease expand
    $(".payeasecard").click(function () {
        $(this).toggleClass("active");
        if ($(this).hasClass("active")) {
            $(".payeasecard").find(".drop-sec").slideUp();
            $(".payeasecard").find(".chk").removeClass("chked");
            $(".payeasecard").removeClass("active");
            $(this).toggleClass("active");
            $(this).find(".drop-sec").slideToggle();
            $(this).find(".chk").toggleClass("chked");
        } else {
            $(this).removeClass("active");
            $(this).find(".drop-sec").slideUp();
            $(this).find(".chk").removeClass("chked");
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

    // $(".paybx-responsive .sidenav li").click(function () {
    //     $(".sidenav li").removeClass("active");
    //     $(this).addClass("active");

    //     if ($(".cc").hasClass("active")) {
    //         $(".cc-form-sec").slideDown();
    //         $(".ease-form-sec").slideUp();
    //     } else if ($(".ease").hasClass("active")) {
    //         $(".cc-form-sec").slideUp();
    //         $(".ease-form-sec").slideDown();
    //     }
    // });

    // purches details in mobile dropdown

    $(".droptlt").click(function () {
        if ($(this).hasClass("rot")) {
            $(".droppurdlts").slideUp();
            $(this).removeClass("rot");
            $(this).text("Show details");
        } else {
            $(".droppurdlts").slideDown();
            $(this).addClass("rot");
            $(this).text("Hide details");
        }

    });

    $(".select-emi-sec li").click(function () {
        $(".select-emi-sec li").removeClass("active");
        $(this).addClass("active")
    });

    $(".paybx-responsive .select-emi-sec li").click(function () {
        $(".select-emi-sec li").removeClass("act");
        $(this).addClass("act")
    });


    $(".slctnxt").click(function () {

        $(".ease-form-sec").hide();
        $(".afterslct").show();
    });


});