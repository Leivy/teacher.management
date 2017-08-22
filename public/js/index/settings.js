define([
  'jquery',
  'uploadify'
], function ($) {
  //'use strict';
  //上传头像
  $("#upfile").uploadify({
    height: 120,
    swf: '/public/assets/uploadify/uploadify.swf',
    uploader: '/api/uploader/avatar',
    width: 120,
    buttonText: "",
    fileObjName: "tc_avatar",
    onUploadSuccess: function (file, data, response) {
      // console.log(file, data, response);
      //response为true时即服务器响应成功
      data = JSON.parse(data);
      //设置图片
      $(".preview img").attr("src", data.result.path);
    }
  });
});