$(document).ready(function () {
    var pages = {};
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
    $(".nav .treeview-menu li a").click(function () {
        $(this).addClass("active").parent().siblings().children().removeClass("active");
    });
   
   
    // //首页为公告页
    $('.aside .nav li a').eq(0).trigger('click')
    window.location.hash = 'claim' 
   
    //学校及介绍初始化
    aboutSchool({"action":"getCategoryIntroduce"},function(res) {
        var result = $.parseJSON(res)['content']
        // console.log(result)
        var str = ''
        pages.names = []
        for (var key in result) {
            pages[key] = result[key]
            str += '<li><a href="#' + key +'">' + key + '</a></li>'
            pages.names.push(key)
        }
        console.log()
        $('.aside .nav').find('.treeview-menu').html(str)
                        .end()
                        .find('#introduction').attr('href','#'+pages.names[0])
    })
    setPage(pages);
    window.onhashchange = function () {
        setPage(pages)
    }
});


//根据不同的hash值得到不同的页面
function setPage(pages) {
    var hash = window.location.hash
    var type = hash.slice(1)
    if (type == '') {
        return 
    }
    switch(type) {
        case 'claim':
            console.log(pages[type])
            pages[type] ?  $('.content').html(_.template($('#'+ type + '-tem').html())({data: pages[type]}))
                        : aboutClaim({"action":"getAllNotice"}, function (res) {
                            console.log('claimtest')
                            pages[type] = $.parseJSON(res)['content']
                            $('.content').html(_.template($('#'+ type + '-tem').html())({data: pages[type]}))
                            getClaimDetails(pages) 
                        }) 
            setTimeout(function () {
                lay()
            }, 100)
            break;
           
        case 'live':
            pages[type] ?   $('.content').html(_.template($('#'+ type + '-tem').html())({data: pages[type]}))
                            : aboutLive('', function (res) {
                                pages[type] = $.parseJSON(res)['content']
                                console.log(pages[type])
                                $('.content').html(_.template($('#'+ type + '-tem').html())({data: pages[type]}))
                            })
            setTimeout(function () {
                lay()
            }, 100)
            break;
        default:
            console.log(pages.names)
            pages[type] ? $('.content').html(_.template($('#introduction-tem').html())({data: pages[type],names: pages.names}))
                        : aboutSchool({"action":"getCategoryIntroduce"}, function (res) {
                            var result = $.parseJSON(res)['content']
                            for (var key in result) {
                               pages[key] = result[key]
                            }
                            $('.content').html(_.template($('#introduction-tem').html())({data: pages[type],names: pages.names}))
                        }) 
             $('.introuduction li').on('click',function(ev) {
               
                    $(this).parent('li').addClass('active')
                        .siblings('li')
                        .removeClass('active')
              
                
            })
            setTimeout(function () {
                lay()
            }, 100)
        break;
    }
}


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


//公告相关js处理
function getClaimDetails(pages) {
    $('#claimList').on('click', function (ev) {
        var event = ev || window.event
        var target = event.target || event.srcElement
        var id =  $(target).parent('li').data('id')
        pages.detail ? $('.content').html(_.template($('#claim-detail-tem').html())({data: pages.detail}))
                     : aboutClaim({action:'getNoticeById', data: JSON.stringify({'id': id})},function (res) {
                        pages.detail = $.parseJSON(res)['content']
                        //console.log(pages.detail)
                        //模板页面渲染
                        $('.content').html(_.template($('#claim-detail-tem').html())({data: pages.detail}))
                        //下载文件类型判断
                        var type = $('.content').find('.download a').data('type')
                        type = fileType(type)
                        $('.content').find('.download a').addClass('icon-'+type)
                        setTimeout(function () {
                            lay()
                        }, 100)
                    })

    })
}
//live直播相关的逻辑处理






//获取下载文件类型
function  fileType(filename) {
    switch(filename) {
        case 'word':
            return 'word'
            break;
        case 'ppt':
            return 'ppt'
            break;
        case 'excel':
            return 'excel'
            break;
        case 'jpg':
        case 'jpeg':
        case 'bmp':
        case 'gif':
        case 'png':
            return 'tupian'
            break;
    }
}
