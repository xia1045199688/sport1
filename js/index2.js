$(function () {
    //顶部轮播
    $(function () {
        var i=0;
        var j=0;
        var t;
        var w=$("#content_1_pic").width();
        $("#content_1_pic_tabs ul li").eq(0).css({
            "background":"url('img2/index_icon_1.png') no-repeat center",
            "background-size": "100% 100%"
        });
        $("#content_1_pic_tabs ul li").click(function () {
            $(this).css({
                "background":"url('img2/index_icon_1.png') no-repeat center",
                "background-size": "100% 100%"
            }).siblings().css({
                "background":"url('img2/index_icon_2.png') no-repeat center",
                "background-size": "100% 100%"
            });
            i=$(this).index();
            $("#content_1_pic_wrap").stop().animate({left:-i*w},500);
        });
        t = setInterval(play, 3000);
        function play() {
            if(i==3){
                i=0;
                $("#content_1_pic_wrap").css({left:0});
            }
            i++;
            j++;
            if (j==3){
                j=0;
                $("#content_1_pic_tabs ul li").eq(0).css({
                    "background":"url('img2/index_icon_1.png') no-repeat center",
                    "background-size": "100% 100%"
                }).siblings().css({
                    "background":"url('img2/index_icon_2.png') no-repeat center",
                    "background-size": "100% 100%"
                })
            }
            $("#content_1_pic_tabs ul li").eq(j).css({
                "background":"url('img2/index_icon_1.png') no-repeat center",
                "background-size": "100% 100%"
            }).siblings().css({
                "background":"url('img2/index_icon_2.png') no-repeat center",
                "background-size": "100% 100%"
            })
            $("#content_1_pic_wrap").stop().animate({left:-i*w},500);
        };
        $("#content_1_pic").swipe({
            swipeLeft:function(){
                if(i==3){
                    i=0;
                    $("#content_1_pic_wrap").css({left:0});
                }
                i++;
                j++;
                if (j==3){
                    j=0;
                    $("#content_1_pic_tabs ul li").eq(j).css({
                        "background":"url('img2/index_icon_1.png') no-repeat center",
                        "background-size": "100% 100%"
                    }).siblings().css({
                        "background":"url('img2/index_icon_2.png') no-repeat center",
                        "background-size": "100% 100%"
                    })
                }
                $("#content_1_pic_tabs ul li").eq(j).css({
                    "background":"url('img2/index_icon_1.png') no-repeat center",
                    "background-size": "100% 100%"
                }).siblings().css({
                    "background":"url('img2/index_icon_2.png') no-repeat center",
                    "background-size": "100% 100%"
                })
                $("#content_1_pic_wrap").stop().animate({left:-i*w},500);
            },
            swipeRight:function(){
                if(i==0){
                    i=3;
                    $("#content_1_pic_wrap").css({left:-i*w});
                }
                i--;
                j--;
                if (j==-1){
                    j=2;
                    $("#content_1_pic_tabs ul li").eq(j).css({
                        "background":"url('img2/index_icon_1.png') no-repeat center",
                        "background-size": "100% 100%"
                    }).siblings().css({
                        "background":"url('img2/index_icon_2.png') no-repeat center",
                        "background-size": "100% 100%"
                    })
                }
                $("#content_1_pic_tabs ul li").eq(j).css({
                    "background":"url('img2/index_icon_1.png') no-repeat center",
                    "background-size": "100% 100%"
                }).siblings().css({
                    "background":"url('img2/index_icon_2.png') no-repeat center",
                    "background-size": "100% 100%"
                })
                $("#content_1_pic_wrap").stop().animate({left:-i*w},500);
            }
        });
        $("#content_1_pic").on("touchstart", function () {
            clearInterval(t);
        });
        $("#content_1_pic").on("touchend", function () {
            t = setInterval(play, 3000);
        });
    });
})