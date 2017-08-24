define([
  'jquery',
  'template',
  'tool',
  'CKEDITOR',
  'uploadify',
  'jquery_cookie',
  'region'
], function ($, template, tool, CKEDITOR) {
  //'use strict';
  $(function () {

    //上传头像
    function setAvatar() {
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
          var path = JSON.parse(data).result.path;
          console.log(path)
          //设置图片
          $(".preview img").attr("src", path);
          $(".avatar img").attr('src', path); //修改了aside的头像
          var userinfo = JSON.parse($.cookie('userinfo'));
          userinfo.tc_avatar = path; //修改cookie中的头像地址
          $.cookie('userinfo', JSON.stringify(userinfo), {
            path: '/',
            expires: 1 //期满
          }); //更新cookie内容
        }
      });
    }

    //渲染个人信息到页面中 通过地址栏的参数
    $.ajax({
      type: 'get',
      url: '/api/teacher/profile',
      success: function (info) {
        console.log(info.result)
        if (info.code == 200) {
          var html = template('settingsfiletemp', info.result);
          $(".settings").html(html);
          setAvatar(); //设置头像
          //入职日期和出生日期 引入插件
          tool.setDate('.tc_birthday');
          tool.setDate('.tc_join_date');
          //省市区三级联动 jQuery.region插件
          $(".pctWrap").region({
            url: "/public/assets/jquery-region/region.json"
          });
          //个人简介富文本编辑器 ckeditor插件 推荐使用国内的ueditor
          CKEDITOR.replace('tc_introduce');
          //CKeditor手动同步到textarea中
          // for (instance in CKEDITOR.instance) {
          //   CKEDITOR.instances[instance].updateElement();
          // };
        }
      }
    });

    //保存按钮点击事件发送请求
    $("body").on('click', '#savebtn', function () {
      CKEDITOR.instances['tc_introduce'].updateElement();
      $.ajax({
        type: 'post',
        url: '/api/teacher/modify',
        data: $("form").serialize(),
        success: function (info) {
          if (info.code == 200) {
            location.href = '/';
          }
        }
      })
    });

  })

});