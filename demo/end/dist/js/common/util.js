define(function (require, exports, module) {
    //获取cookie
    exports.getCookie=function (c_name){
        if (document.cookie.length>0){
            c_start=document.cookie.indexOf(c_name + "=");
            if (c_start!=-1){
                c_start=c_start + c_name.length+1;
                c_end=document.cookie.indexOf(";",c_start);
                if (c_end==-1)
                    c_end=document.cookie.length;
                return unescape(document.cookie.substring(c_start,c_end))
            }
        }
        return "";
    };

    //存cookie
    exports.setCookie=function (c_name, value, expiredays){
        var exdate=new Date();
        exdate.setDate(exdate.getDate() + expiredays);
        document.cookie=c_name+ "=" + escape(value) + ((expiredays==null) ? "" : ";expires="+exdate.toGMTString());
    };

    //获取地址栏#后的数据
    exports.GetRequest=function () {
        var url = location.search; //获取url中"?"符后的字串
        var theRequest = new Object();
        if (url.indexOf("#") != -1) {
            var str = url.substr(1);
            strs = str.split("&");
            for(var i = 0; i < strs.length; i ++) {
                theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);
            }
        }
        return theRequest;
    };

    exports.getUrl=function (str) {
        return "http://www.aifavor.com/"+str
    };

    exports.ajax=function (type, url, data, successFn, wrongFn, dataType) {
        var dataT = (dataType === undefined ? 'json' : dataType);

        var ajax = $.ajax({
            type: type,
            url: url,
            dataType: dataT,
            data: data,
            success: function (data) {
                console.log(data);
                if (data.rescode == 200) {
                    (successFn && typeof successFn === 'function') ? successFn(data) : null
                }else {
                     (wrongFn && typeof wrongFn === 'function') ? wrongFn() : null;
                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                // XMLHttpRequest.status
                // alert('连接服务器出错 ' + textStatus + errorThrown);
                if (ajax.abort().status === 500) {
                    location.hash = '#common/500';
                } else if (ajax.abort().status === 404) {
                    location.hash = '#common/404';
                }
                ajax.abort();
            }
        })
    }
});











