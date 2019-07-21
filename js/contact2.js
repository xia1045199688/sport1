$(function () {
    //宁波
    $("#content_1_site_1").click(function () {
        $("#content_1_site_1").toggleClass("content-1-site-1-toggle");
        $("#content_1_site_1_text").slideToggle("slow");
        $("#content_1_site_2").removeClass("content-1-site-2-toggle");
        $("#content_1_site_2_text").slideUp("slow");
        $("#content_1_site_3").removeClass("content-1-site-3-toggle");
        $("#content_1_site_3_text").slideUp("slow");
        $("#content_1_toggle").slideDown("slow");
    });
    $("#content_1_site_2").click(function () {
        $("#content_1_site_2").toggleClass("content-1-site-2-toggle");
        $("#content_1_site_2_text").slideToggle("slow");
        $("#content_1_site_1").removeClass("content-1-site-1-toggle");
        $("#content_1_site_1_text").slideUp("slow");
        $("#content_1_site_3").removeClass("content-1-site-3-toggle");
        $("#content_1_site_3_text").slideUp("slow");
        $("#content_1_toggle").slideDown("slow");
    });
    $("#content_1_site_3").click(function () {
        $("#content_1_site_3").toggleClass("content-1-site-3-toggle");
        $("#content_1_site_3_text").slideToggle("slow");
        $("#content_1_site_2").removeClass("content-1-site-2-toggle");
        $("#content_1_site_2_text").slideUp("slow");
        $("#content_1_site_1").removeClass("content-1-site-1-toggle");
        $("#content_1_site_1_text").slideUp("slow");
        $("#content_1_toggle").slideToggle("slow");
    });
});