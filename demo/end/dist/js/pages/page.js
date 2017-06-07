define(function (require, exports, module){
	var tpl = require('common/templates.js')
	var util = require('common/util')
	console.log(typeof tpl)
	var ajax = util['ajax']
	var pages = {}
	exports.init = function () {
		// setPage(pages)
		// window.onhashchange = function () {
		// 	setPage(pages)
		// }
		renderIntro(pages)
	}
	var renderIntro = function (pages) {
		ajax('POST','http://www.aifavor.com/backend/introduce',{"action":"getCategoryIntroduce"}, function (res) {
			for(var key in res.content){
				pages[key] =  tpl['overview/introduction']({data:res.content[key]})
			}
			
		})
	}

	function setPage(pages) {
	    var hash = window.location.hash
	    var type = hash ? hash.slice(1) : null
	    if(type === null) return
	    switch(type) {
	        case 'claim':
	            pages[type] ? $('#render').html(pages[type])
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

	            // console.log(pages.names)
	            // pages[type] ? $('#render').html(pages[type])
	            //             : aboutSchool({"action":"getCategoryIntroduce"}, function (res) {
	            //                 var result = $.parseJSON(res)['content']
	            //                 for (var key in result) {
	            //                    pages[key] = result[key]
	            //                 }
	            //                 $('.content').html(_.template($('#introduction-tem').html())({data: pages[type],names: pages.names}))
	            //             }) 
	            //  $('.introuduction li').on('click',function(ev) {
	               
	            //         $(this).parent('li').addClass('active')
	            //             .siblings('li')
	            //             .removeClass('active')
	              
	                
	            // })
	            // setTimeout(function () {
	            //     lay()
	            // }, 100)
	        break;
	    }
	}
})