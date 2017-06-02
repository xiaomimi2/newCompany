/**
 * Created by cosmosev on 2017/5/12.
 */
$(function () {
    lay();
    window.addEventListener("resize", lay, false);


    orient();
    /* 在用户变化屏幕显示方向的时候调用*/
    window.addEventListener( 'orientationchange', function(e){
        orient();
    },false);
});

function lay() {
    var cW=document.documentElement.clientWidth || document.body.clientWidth;
    var lW=$(".aside")[0].clientWidth;
    var rW=cW-lW;

    if(cW>750){
        $(".content").css("width",rW);
    }
}

function orient() {
    // alert(window.orientation);
    if (window.orientation == 0 || window.orientation == 180) {
        $("body").attr("class", "portrait");
        orientation = 'portrait';
        return false;
    }
    else if (window.orientation == 90 || window.orientation == -90) {
        $("body").attr("class", "landscape");
        orientation = 'landscape';
        return false;
    }
}
