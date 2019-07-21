$(function () {
    //管理切换
    $(function () {
        var i=0;
        var j=0;
        var t;
        var w=$("#content_5_con_box_wrap").width();
        $("#content_5_con_1 ul li").eq(0).css({
            "background":"url('img2/about_icon_1.png') no-repeat center",
            "background-size": "100% 100%"
        });
        t = setInterval(play, 3000);
        function play() {
            if(i==5){
                i=0;
                $("#content_5_con_box_wrapper").css({left:0});
            }
            i++;
            j++;
            if (j==5){
                j=0;
                $("#content_5_con_1 ul li").eq(0).css({
                    "background":"url('img2/about_icon_1.png') no-repeat center",
                    "background-size": "100% 100%"
                }).siblings().css({
                    "background":"url('img2/about_icon_2.png') no-repeat center",
                    "background-size": "100% 100%"
                })
            }
            $("#content_5_con_1 ul li").eq(j).css({
                "background":"url('img2/about_icon_1.png') no-repeat center",
                "background-size": "100% 100%"
            }).siblings().css({
                "background":"url('img2/about_icon_2.png') no-repeat center",
                "background-size": "100% 100%"
            })
            $("#content_5_con_box_wrapper").stop().animate({left:-i*w},500);
        };
        $("#content_5_con_box_wrap").swipe({
            swipeLeft:function(){
                if(i==5){
                    i=0;
                    $("#content_5_con_box_wrapper").css({left:0});
                }
                i++;
                j++;
                if (j==5){
                    j=0;
                    $("#content_5_con_1 ul li").eq(j).css({
                        "background":"url('img2/about_icon_1.png') no-repeat center",
                        "background-size": "100% 100%"
                    }).siblings().css({
                        "background":"url('img2/about_icon_2.png') no-repeat center",
                        "background-size": "100% 100%"
                    })
                }
                $("#content_5_con_1 ul li").eq(j).css({
                    "background":"url('img2/about_icon_1.png') no-repeat center",
                    "background-size": "100% 100%"
                }).siblings().css({
                    "background":"url('img2/about_icon_2.png') no-repeat center",
                    "background-size": "100% 100%"
                })
                $("#content_5_con_box_wrapper").stop().animate({left:-i*w},500);
            },
            swipeRight:function(){
                if(i==0){
                    i=4;
                    $("#content_5_con_box_wrapper").css({left:-i*w});
                }
                i--;
                j--;
                if (j==-1){
                    j=4;
                    $("#content_5_con_1 ul li").eq(j).css({
                        "background":"url('img2/about_icon_1.png') no-repeat center",
                        "background-size": "100% 100%"
                    }).siblings().css({
                        "background":"url('img2/about_icon_2.png') no-repeat center",
                        "background-size": "100% 100%"
                    })
                }
                $("#content_5_con_1 ul li").eq(j).css({
                    "background":"url('img2/about_icon_1.png') no-repeat center",
                    "background-size": "100% 100%"
                }).siblings().css({
                    "background":"url('img2/about_icon_2.png') no-repeat center",
                    "background-size": "100% 100%"
                })
                $("#content_5_con_box_wrapper").stop().animate({left:-i*w},500);
            }
        });
        $("#content_5_con_box_wrap").on("touchstart", function () {
            clearInterval(t);
        });
        $("#content_5_con_box_wrap").on("touchend", function () {
            t = setInterval(play, 3000);
        });
    });
    //员工切换
    $(function () {
        var i=0;
        var w=$("#content_5_con_2_box").width();
        $("#content_5_con_2_toLeft").click(function () {
            i--;
            if(i<0){
                i=0;
            }
            // console.log(i);
            $("#content_5_con_2_box_staff_wrap").animate({left:-i*w},500);
        });
        $("#content_5_con_2_toRight").click(function () {
            i++;
            if(i>2){
                i=2;
            }
            // console.log(i);
            $("#content_5_con_2_box_staff_wrap").animate({left:-i*w},500);
        });
    });
});