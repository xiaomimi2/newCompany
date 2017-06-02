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
            // load页面   
            $('.content').load('dist/tpl/pages/' + activePage + '.html');
            break;
        default:
            // load页面
            $('.content').load('dist/tpl/pages/introduction.html');
    }

}