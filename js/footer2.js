$(function () {
    var i=0;
    $("#foot ul li").click(function () {
        i=$(this).index();
        if(i==0){
            window.location.href = "index.html"
        }
        if(i==1){
            window.location.href = "course.html"
        }
        if(i==2){
            window.location.href = "about.html"
        }
        if(i==3){
            window.location.href = "contact.html"
        }
        if(i==4){
            window.location.href = "free.html"
        }
    });
})