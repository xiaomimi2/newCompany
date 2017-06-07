/**
 * Created by cosmosev on 2017/5/23.
 */
define(function (require, exports, module) {
    exports.init = function () {
        //编辑
        $("#overview_edit").click(function () {
            window.location.hash="#overview/edit";
            location.reload();
        });
    };
});