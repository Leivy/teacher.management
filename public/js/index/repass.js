define([
  'jquery',
], function ($, factory) {
  'use strict';
  $(function () {

    $("#savebtn").click(function () {
      var pass = $("#pass").val();
      var newpass = $("#newpass").val();
      var conpass = $("#conpass").val();
      console.log([pass, newpass, conpass])
      //发送请求修改密码
      $.ajax({
        type: 'post',
        url: '/api/teacher/repass',
        data: {
          tc_pass: pass,
          tc_new_pass: newpass
        },
        beforeSend: function () {
          //判断新密码两次输入是否正确
          // $("#conpass").blur(function () {});
          if (newpass != conpass) return false;
        },
        success: function (info) {
          if (info.code == 200) {
            $('#logout').click();
          }
        }
      })
      return false;
    })

  })
});