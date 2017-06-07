/**
 * Created by cosmosev on 2017/5/23.
 */
define(function (require, exports, module) {
    var UTIL=require("common/util.js");
    exports.init = function () {
        //保存编辑
        $("#overview_save").click(function () {
            window.location.href="#overview/list";
        });
        //取消编辑
        $("#overview_cancel").click(function () {
            window.location.href="#overview/list";
        });
    };
});