$(function () {
    //课程
    $(function () {
        var i=0;
        var h1=$("#content_1").height();
        var h2=$("#content_2").height();
        var h3=$("#content_3").height();
        var h4=$("#content_4").height();
        var h5=$("#content_5").height();
        var h6=$("#content_6").height();
        $("#content_2_main ul li").eq(0).css({
            "background-color": "#c01c2e",
            "border-top": "0.05rem solid #c01c2e",
            "border-bottom": "0.05rem solid #c01c2e"
        });
        $("#content_2_main ul li a").eq(0).css({
            "color": "#ffffff"
        });
        $("#content_2_main ul li").click(function () {
            $(this).css({
                "background-color": "#c01c2e",
                "border-top": "0.05rem solid #c01c2e",
                "border-bottom": "0.05rem solid #c01c2e"
            }).siblings().css({
                "background-color": "#ffffff",
                "border-top": "0.05rem solid #dddddd",
                "border-bottom": "0.05rem solid #dddddd"
            });
            i=$(this).index();
            $("#content_2_main ul li a").eq(i).css({
                "color": "#ffffff"
            }).siblings().css({
                "color": "#595757"
            });;
        });
        $("#content_2_main ul li").eq(0).click(function () {
            $('body,html').animate({'scrollTop':h1},300);
        });
        $("#content_2_main ul li").eq(1).click(function () {

            $('body,html').animate({'scrollTop':h1+h2+h3},300);
        });
        $("#content_2_main ul li").eq(2).click(function () {

            $('body,html').animate({'scrollTop':h1+h2+h3+h4},300);
        });
        $("#content_2_main ul li").eq(3).click(function () {

            $('body,html').animate({'scrollTop':h1+h2+h3+h4+h5},300);
        });
        $(window).bind('scroll resize',function(){
            if($(window).scrollTop()<(h1+h2+h3)){
                $("#content_2_main ul li").eq(0).css({
                    "background-color": "#c01c2e",
                    "border-top": "0.05rem solid #c01c2e",
                    "border-bottom": "0.05rem solid #c01c2e"
                });
                $("#content_2_main ul li a").eq(0).css({
                    "color": "#ffffff"
                });
                $("#content_2_main ul li").eq(1).css({
                    "background-color": "#ffffff",
                    "border-top": "0.05rem solid #dddddd",
                    "border-bottom": "0.05rem solid #dddddd"
                });
                $("#content_2_main ul li a").eq(1).css({
                    "color": "#595757"
                });
                $("#content_2_main ul li").eq(2).css({
                    "background-color": "#ffffff",
                    "border-top": "0.05rem solid #dddddd",
                    "border-bottom": "0.05rem solid #dddddd"
                });
                $("#content_2_main ul li a").eq(2).css({
                    "color": "#595757"
                });
                $("#content_2_main ul li").eq(3).css({
                    "background-color": "#ffffff",
                    "border-top": "0.05rem solid #dddddd",
                    "border-bottom": "0.05rem solid #dddddd"
                });
                $("#content_2_main ul li a").eq(3).css({
                    "color": "#595757"
                });
            }
        });
    });
    //篮球
    $(function () {
        var i=0;
        var t;
        var w=$("#content_4_pic_box").width();
        t = setInterval(play, 3000);
        function play() {
            if(i==3){
                i=0;
                $("#content_4_pic_wrap").css({left:0});

            }
            i++;
            if(i==0){
                $("#content_4_bottom").css({
                    "background":"url('img2/course_pic_11.png') no-repeat center",
                    "background-size": "100% 100%"
                });
            }
            if(i==1){
                $("#content_4_bottom").css({
                    "background":"url('img2/course_pic_13.png') no-repeat center",
                    "background-size": "100% 100%"
                });
            }
            if(i==2){
                $("#content_4_bottom").css({
                    "background":"url('img2/course_pic_11.png') no-repeat center",
                    "background-size": "100% 100%"
                });
            }
            if(i==3){
                $("#content_4_bottom").css({
                    "background":"url('img2/course_pic_11.png') no-repeat center",
                    "background-size": "100% 100%"
                });
            }
            $("#content_4_pic_wrap").stop().animate({left:-i*w},500);
        };
        //滑动
        $("#content_4_pic_box").swipe({
            swipeLeft:function(){
                if(i==3){
                    i=0;
                    $("#content_4_pic_wrap").css({left:0});

                }
                i++;
                if(i==0){
                    $("#content_4_bottom").css({
                        "background":"url('img2/course_pic_11.png') no-repeat center",
                        "background-size": "100% 100%"
                    });
                }
                if(i==1){
                    $("#content_4_bottom").css({
                        "background":"url('img2/course_pic_13.png') no-repeat center",
                        "background-size": "100% 100%"
                    });
                }
                if(i==2){
                    $("#content_4_bottom").css({
                        "background":"url('img2/course_pic_11.png') no-repeat center",
                        "background-size": "100% 100%"
                    });
                }
                if(i==3){
                    $("#content_4_bottom").css({
                        "background":"url('img2/course_pic_11.png') no-repeat center",
                        "background-size": "100% 100%"
                    });
                }
                $("#content_4_pic_wrap").stop().animate({left:-i*w},500);
            },
            swipeRight:function(){
                if(i==0){
                    i=2;
                    $("#content_4_pic_wrap").css({left:-i*w});
                }
                i--;
                if(i==0){
                    $("#content_4_bottom").css({
                        "background":"url('img2/course_pic_11.png') no-repeat center",
                        "background-size": "100% 100%"
                    });
                }
                if(i==1){
                    $("#content_4_bottom").css({
                        "background":"url('img2/course_pic_13.png') no-repeat center",
                        "background-size": "100% 100%"
                    });
                }
                if(i==2){
                    $("#content_4_bottom").css({
                        "background":"url('img2/course_pic_11.png') no-repeat center",
                        "background-size": "100% 100%"
                    });
                }
                if(i==3){
                    $("#content_4_bottom").css({
                        "background":"url('img2/course_pic_13.png') no-repeat center",
                        "background-size": "100% 100%"
                    });
                }
                $("#content_4_pic_wrap").stop().animate({left:-i*w},500);
            }
        });
        $("#content_4_pic_box").on("touchstart",function(){
            clearInterval(t);
        })
        $("#content_4_pic_box").on("touchend",function(){
            t = setInterval(play, 3000);
        })
    });
    //羽毛球
    $(function () {
        var i = 0;
        var t;
        var w = $("#content_6_pic_box").width();
        t = setInterval(play, 3000);

        function play() {
            if (i == 3) {
                i = 0;
                $("#content_6_pic_wrap").css({left: 0});

            }
            i++;
            if (i == 0) {
                $("#content_6_bottom").css({
                    "background": "url('img2/course_pic_13.png') no-repeat center",
                    "background-size": "100% 100%"
                });
            }
            if (i == 1) {
                $("#content_6_bottom").css({
                    "background": "url('img2/course_pic_11.png') no-repeat center",
                    "background-size": "100% 100%"
                });
            }
            if (i == 2) {
                $("#content_6_bottom").css({
                    "background": "url('img2/course_pic_13.png') no-repeat center",
                    "background-size": "100% 100%"
                });
            }
            if (i == 3) {
                $("#content_6_bottom").css({
                    "background": "url('img2/course_pic_13.png') no-repeat center",
                    "background-size": "100% 100%"
                });
            }
            $("#content_6_pic_wrap").stop().animate({left: -i * w}, 500);
        };
        $("#content_6_pic_box").swipe({
            swipeLeft:function(){
                if (i == 3) {
                    i = 0;
                    $("#content_6_pic_wrap").css({left: 0});

                }
                i++;
                if (i == 0) {
                    $("#content_6_bottom").css({
                        "background": "url('img2/course_pic_13.png') no-repeat center",
                        "background-size": "100% 100%"
                    });
                }
                if (i == 1) {
                    $("#content_6_bottom").css({
                        "background": "url('img2/course_pic_11.png') no-repeat center",
                        "background-size": "100% 100%"
                    });
                }
                if (i == 2) {
                    $("#content_6_bottom").css({
                        "background": "url('img2/course_pic_13.png') no-repeat center",
                        "background-size": "100% 100%"
                    });
                }
                if (i == 3) {
                    $("#content_6_bottom").css({
                        "background": "url('img2/course_pic_13.png') no-repeat center",
                        "background-size": "100% 100%"
                    });
                }
                $("#content_6_pic_wrap").stop().animate({left: -i * w}, 500);
            },
            swipeRight:function(){
                if (i == 0) {
                    i = 2;
                    $("#content_6_pic_wrap").css({left: -i*w});

                }
                i--;
                if (i == 0) {
                    $("#content_6_bottom").css({
                        "background": "url('img2/course_pic_13.png') no-repeat center",
                        "background-size": "100% 100%"
                    });
                }
                if (i == 1) {
                    $("#content_6_bottom").css({
                        "background": "url('img2/course_pic_11.png') no-repeat center",
                        "background-size": "100% 100%"
                    });
                }
                if (i == 2) {
                    $("#content_6_bottom").css({
                        "background": "url('img2/course_pic_13.png') no-repeat center",
                        "background-size": "100% 100%"
                    });
                }
                if (i == 3) {
                    $("#content_6_bottom").css({
                        "background": "url('img2/course_pic_13.png') no-repeat center",
                        "background-size": "100% 100%"
                    });
                }
                $("#content_6_pic_wrap").stop().animate({left: -i * w}, 500);
            }
        });
        $("#content_6_pic_box").on("touchstart", function () {
            clearInterval(t);
        });
        $("#content_6_pic_box").on("touchend", function () {
            t = setInterval(play, 3000);
        });
    });
});