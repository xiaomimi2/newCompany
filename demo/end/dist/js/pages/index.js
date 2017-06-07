// define(function (require, exports, module) {
//     exports.init=function () {
//         loadPage();

//         // $(".lishowO").click(function () {
//         //     location.href=$(this).attr("href");
//         // });

//         window.onhashchange = loadPage;

//     };

//     function loadPage() {
//         var page = window.location.hash;
//         console.log(page)
//         if (page == null || page == undefined || page == "") {
//             if ($(".sidebar-menu li:eq(0) ul").length == 0) {
//                 page = $(".sidebar-menu li:eq(0)").find("a").attr("href").slice(1)
//             }else{
//                 page = $(".sidebar-menu li:eq(0) ul li:eq(0)").find("a").attr('href').slice(1)
//             }
//         }else {
//             page = page.slice(1)
//         }

//         //刷新菜单的焦点
//         var $a=$(".lishow[group='"+page+"']");
//         if($a.parent().parent().hasClass("sidebar-menu")){
//             $a.parent().addClass("active");
//         }else {
//             $a.parent().addClass("active").siblings().removeClass("active").parent().parent().addClass("active");
//         }

//         // load页面   
//         console.log(page)
//         $('#reload').load('tpl/pages/overview/' + page + '.html');
        
//     }
//     // $('#reload').load('tpl/pages/edit.html')
// });

