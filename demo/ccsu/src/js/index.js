/**
 * Created by cosmosev on 2017/5/12.
 */

$(document).ready(function () {
    var $t=$("#introduction").siblings(".tree-layout").children(".treeview-menu");
    //介绍的下拉列表
    $(".treeview>a").click(function () {
        $(".active").removeClass("active");
        $(this).addClass("active");
        
        var w = document.documentElement.clientWidth || document.body.clientWidth;
        if($(this).attr("id")=="introduction") {
            if(w > 750) {
                if($t.hasClass("show")){
                    $t.removeClass("show");
                }else {
                    $t.addClass("show");
                    $(".treeview-menu li a").eq(0).trigger('click');    
                }
            } else {
                $('.introuduction .treeview-menu').show()
                $t && $t.remove()
            }
            
        }else {
            $t.removeClass("show");
        }
    });
    $(".treeview-menu li a").click(function () {
        $(this).addClass("active").parent().siblings().children().removeClass("active");
    });

    setPage();
    window.onhashchange = setPage;
});

function setPage() {
    var page = window.location.hash.match(/^#([^?]*)/);
    if (page == null || page == undefined || page == "") {
        page=$(".treeview>a").eq(0).attr("href");
    } else {
        page = page[0];
    }
    if($("a[href='"+page+"']").parent().parent().hasClass("treeview-menu")){
        $("a[href='"+page+"']").parent().parent().addClass("show");
        $("a[href='"+page+"']").parent().parent().parent().siblings("a").addClass("active");
    }
    $("a[href='"+page+"']").addClass("active");

    var activePage=page.substring(1);
    switch(activePage)
    {
        case "claim":
        case "live":
        case "claim-detail":
            // load页面   
            $('.content').load('src/tpl/pages/' + activePage + '.html', lay)
            break;
        default:
            // load页面
            $('.content').load('src/tpl/pages/introduction.html', lay);
    }

}

// function setPage(data) {
//     var hash = window.location.hash
//     var type = hash.slice(1)
//     switch(type) {
//         case 'claim':
//         case 'live':
//         $('.content').html(_.template($('#'+ type + '-tem').html())(data));
//         break;
//         case 'library':
//         case 'research':
//         case 'teaching':
//         case 'meeting':
//         case 'lake':
//         case 'canteen':
//         $('.content').html(_.template($('introduction-tem').html())(data[type]));
//         break;
//     }
// }
function lay() {
    var cW=document.documentElement.clientWidth || document.body.clientWidth;
    var lW=$(".aside")[0].clientWidth;
    var rW=cW-lW-1;//这里可能问题是.conten会往下掉。要解决这个问题，

    if(cW>750){
        $(".content").css("width",rW);
    }
}


//相关公告
function aboutClaim(data, callback) {
    $.post('http://www.aifavor.com/backend/notice',data,callback)
}

//直播相关
function aboutLive(data, callback) {
    $.post('http://www.aifavor.com/backend/live',data,callback)
}

//学校介绍相关
function aboutSchool(data,callback) {
    $.post('http://www.aifavor.com/backend/introduce', data, callback)
}

//加入faskClick
$(function (){
    FastClick.attach(document.body)
})

//image 图片优化
// function getImage(url) {
//     var img = new Image()
//     img.src = url
//     img.onload = function () {
        
//     }
// }