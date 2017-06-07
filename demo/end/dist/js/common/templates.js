define(function(require, exports, module){exports['common/404']=function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
with(obj||{}){
__p+='<!-- Content Header (Page header) --> <section class="content-header"> <h1> 404 Error Page </h1> <!--<ol class="breadcrumb">--> <!--<li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>--> <!--<li><a href="#">Examples</a></li>--> <!--<li class="active">404 error</li>--> <!--</ol>--> </section> <!-- Main content --> <section class="content"> <div class="error-page"> <h2 class="headline text-yellow" style="margin-top: -18px"> 404</h2> <div class="error-content"> <h3><i class="fa fa-warning text-yellow"></i> Oops! Page not found.</h3> <p> We could not find the page you were looking for. Meanwhile, you may <a href="#overview/list">return to Terminal list page</a> . </p> <!--<form class="search-form">--> <!--<div class="input-group">--> <!--<input type="text" name="search" class="form-control" placeholder="Search">--> <!--<div class="input-group-btn">--> <!--<button type="submit" name="submit" class="btn btn-warning btn-flat"><i class="fa fa-search"></i>--> <!--</button>--> <!--</div>--> <!--</div>--> <!--&lt;!&ndash; /.input-group &ndash;&gt;--> <!--</form>--> </div> <!-- /.error-content --> </div> <!-- /.error-page --> </section> <!-- /.content -->';
}
return __p;
};
exports['common/500']=function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
with(obj||{}){
__p+='<!-- Content Header (Page header) --> <section class="content-header"> <h1> 500 Error Page </h1> <!--<ol class="breadcrumb">--> <!--<li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>--> <!--<li><a href="#">Examples</a></li>--> <!--<li class="active">500 error</li>--> <!--</ol>--> </section> <!-- Main content --> <section class="content"> <div class="error-page"> <h2 class="headline text-red" style="margin-top: -18px">500</h2> <div class="error-content"> <h3><i class="fa fa-warning text-red"></i> Oops! Something went wrong.</h3> <p> We will work on fixing that right away. Meanwhile, you may <a href="#overview/list">return to Terminal list page</a> . </p> <!--<form class="search-form">--> <!--<div class="input-group">--> <!--<input type="text" name="search" class="form-control" placeholder="Search">--> <!--<div class="input-group-btn">--> <!--<button type="submit" name="submit" class="btn btn-danger btn-flat"><i class="fa fa-search"></i>--> <!--</button>--> <!--</div>--> <!--</div>--> <!--&lt;!&ndash; /.input-group &ndash;&gt;--> <!--</form>--> </div> </div> <!-- /.error-page --> </section> <!-- /.content -->';
}
return __p;
};
exports['overview/claim-edit']=function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
with(obj||{}){
__p+='<form action="" class="form-horizontal"> <div class="form-group"> <label for="" class="col-sm-2 control-label">标题</label> <div class="col-sm-10"> <input type="text" class="form-control" name="title"> </div> </div> <div class="form-group"> <label for="" class="col-sm-2 control-label">正文</label> <div class="col-sm-10"> <textarea type="text" class="form-control" name="content"></textarea> </div> </div> <div class="form-group"> <label for="" class="col-sm-2 control-label">图片</label> <div class="col-sm-10"> <div class="col-xs-4 img-wrapper"><img src="dist/img/school-2.png" alt="" class="img-responsive"><span class="glyphicon glyphicon-remove delete"></span></div> <div class="col-xs-4 img-wrapper"><img src="dist/img/school-2.png" alt="" class="img-responsive"><span class="glyphicon glyphicon-remove delete"></span></div> </div> </div> <div class="form-group"> <label for="" class="col-sm-2 control-label">上传文件</label> <div class="col-sm-4"> <div class="box box-primary"> <div class="box-header"> <h4 class="box-title">111</h4> <div class="box-tools pull-right"> <a href="#claim-edit" class="btn btn-primary">删除</a> </div> </div> <div class="box-header"> <h3 class="box-title">111</h3> <div class="box-tools pull-right"> <span class="btn btn-primary">删除</span> </div> </div> <div class="box-header"> <h3 class="box-title">111</h3> <div class="box-tools pull-right"> <span class="btn btn-primary">删除</span> </div> </div> <div class="box-header"> <h3 class="box-title">111</h3> <div class="box-tools pull-right"> <span class="btn btn-primary">删除</span> </div> </div> </div> </div> <div class="col-sm-2 text-center"> <div class="inputfile"><input type="file" class="form-group btn btn-primary"> <span class="glyphicon glyphicon-folder-open" name="file">上传文件</span> </div> </div> </div> <div class="form-group has-feedback"> <label for="" class="col-sm-2 control-label">上传部门</label> <div class="col-sm-4"> <input type="text" class="form-control"> <input type="text" class="form-control"> </div> <div class="col-sm-1 control-label"> <span class="glyphicon glyphicon-plus"></span> </div> </div> <div class="form-group"> <label for="" class="col-sm-2 control-label">上传者</label> <div class="col-sm-4"> <input type="text" class="form-control"> </div> </div> <div class="form-group text-center"><button class="btn btn-success">确定</button>&nbsp;&nbsp;<button class="btn btn-danger">取消</button></div> </form>';
}
return __p;
};
exports['overview/claim']=function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
with(obj||{}){
__p+='<div class="box box-primary"> ';
 data.forEach(function (item) { 
__p+=' <div class="box-header"> <h3 class="box-title">'+
((__t=( item.title ))==null?'':__t)+
'</h3> <div class="box-tools pull-right"> <span class="label label-warning">'+
((__t=( item.uptime))==null?'':__t)+
'</span> <a href="#claim-edit" class="btn btn-primary" data-id="'+
((__t=( item.id ))==null?'':__t)+
'">编辑</a> </div> </div> ';
 })
__p+=' </div>';
}
return __p;
};
exports['overview/edit']=function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
with(obj||{}){
__p+='<div class="box box-primary" style="overflow-x: auto"> <div class="box-header with-border"> <button id="overview_save" type="button" class="btn btn-primary"><i class="fa fa-floppy-o"></i> 保存</button> <button id="overview_cancel" type="button" class="btn btn-primary">取消</button> </div> <div class="box-body"> <div class="table-responsive" style="max-width: 800px; margin: 0 auto; padding-left: -10%"> <table class="table no-border"> <tr> <td class="text-right" style="width: 60px">标题：</td> <td><input type="text" class="form-control overview_title"></td> </tr> <tr> <td class="text-right">图片：</td> <td class="pics"> <div class="Icons"> <div class="gb shopIcon"> <div class="progress progress-striped processes"> <div class="progress-bar progress-bar-success pgb" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div> </div> <div class="zz"></div> <div class="shopAddIcon">+</div> <img class="shopShowIcon" src=""> <div class="shopDelIcon"><i class="fa fa-times"></i></div> </div> <input type="file" class="shopFile" style="display: none"> </div> </td> </tr> <tr> <td class="text-right"></td> <td><button class="btn-sm btn-success overview_add_pic">添加图片</button> <button class="btn-sm btn-success overview_del_pic">删除图片</button> <span style="color: red" class="overview_msg"></span></td> </tr> <tr> <td class="text-right">内容：</td> <td> <textarea class="form-control overview_content" style="min-height: 260px"></textarea> </td> </tr> </table> </div> </div> </div> <script> seajs.use("pages/overview/edit.js", function (overview) {\r\n        overview.init()\r\n    }) </script> ';
}
return __p;
};
exports['overview/introduction']=function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
with(obj||{}){
__p+='<button class="btn btn-danger" id="deletetype">删除此类</button> <form action="" class="form-horizontal"> <div class="form-group"> <label for="" class="col-sm-2 control-label">建筑名称</label> <div class="col-sm-4"> <input type="text" class="form-control" value="'+
((__t=( data.title ))==null?'':__t)+
'"> </div> </div> <div class="form-group"> <label for="" class="col-sm-2 control-label">正文</label> <div class="col-sm-10"> <textarea type="text" class="form-control" value="'+
((__t=( data.content ))==null?'':__t)+
'"></textarea> </div> </div> <div class="form-group"> <label for="" class="col-sm-2 control-label">图片</label> ';
 if(typeof data.pic === 'string') { 
__p+=' <div class="col-sm-10"> <div class="col-xs-4 img-wrapper"><img src="dist/img/school-2.png" alt="" class="img-responsive"><span class="glyphicon glyphicon-remove delete"></span></div> </div> ';
 } else {
__p+=' <div class="col-sm-10"> ';
 data.pic.forEach(function(img){
__p+=' <div class="col-xs-4 img-wrapper"><img src="dist/img/school-2.png" alt="" class="img-responsive"><span class="glyphicon glyphicon-remove delete"></span></div> ';
})
__p+=' </div> ';
 } 
__p+=' </div>  <div class="form-group text-center"><button class="btn btn-success">确定</button>&nbsp;&nbsp;<button class="btn btn-danger">取消</button></div> </form>';
}
return __p;
};
exports['overview/list']=function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
with(obj||{}){
__p+='<div class="box box-primary" style="overflow-x: auto"> <div class="box-header with-border"> <button id="overview_edit" type="button" class="btn btn-primary"><i class="fa fa-edit"></i> 编辑</button> </div> <div class="box-body"> <div class="table-responsive" style="max-width: 800px; margin: 0 auto; padding-left: -10%"> <table class="table no-border"> <tr> <td class="text-right" style="width: 60px">标题：</td> <td class="overview_title"></td> </tr> <tr> <td class="text-right">图片：</td> <td class="overview_img"> </td> </tr> <tr> <td class="text-right">内容：</td> <td class="overview_content" style="white-space: pre-wrap; text-indent: 30px"> </td> </tr> </table> </div> </div> </div> <script> seajs.use("pages/overview/list.js", function (overview) {\r\n        overview.init()\r\n    }) </script> ';
}
return __p;
};
exports['overview/live']=function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
with(obj||{}){
__p+='<form action="" class="form-horizontal"> <div class="form-group"> <label for="" class="col-sm-2 control-label">频道名称</label> <div class="col-sm-4"> <input type="text" class="form-control"> </div> </div> <div class="form-group"> <label for="" class="col-sm-2 control-label">频道地址</label> <div class="col-sm-4"> <input type="text" class="form-control"> </div> </div> <div class="form-group"> <label for="" class="col-sm-2 control-label">频道图标</label> <div class="col-sm-10"> <div class="col-xs-4 img-wrapper"><img src="dist/img/school-2.png" alt="" class="img-responsive"><span class="glyphicon glyphicon-remove delete"></span></div> <div class="col-xs-4 img-wrapper"><img src="dist/img/school-2.png" alt="" class="img-responsive"><span class="glyphicon glyphicon-remove delete"></span></div> </div> <div class="col-sm-2 col-sm-offset-2"> <div class="inputfile text-center"><input type="file" class="form-control btn btn-primary"><span class=""><i class="glyphicon glyphicon-folder-open"></i>上传</span></div> </div> </div>  <div class="form-group text-center"><button class="btn btn-success">确定</button>&nbsp;&nbsp;<button class="btn btn-danger">取消</button></div> </form>';
}
return __p;
};});