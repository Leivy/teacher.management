define([
  'jquery',
  'template',
  'bootstrap',
  'jquery_cookie'
], function ($, template) {
  'use strict';
  $(function () {
    //拉取数据渲染列表
    $.get({
      // type: "get",
      url: '/api/teacher',
      success: function (info) {
        if (info.code == 200) {
          var html = template("teacher_list_temp", info);
          $("#teacherlist").html(html);
        }
      }
    });
    //查看按钮功能实现 点击事件 显示模态框 更新模态框数据
    //由于列表信息是ajax渲染的 所以注册委托事件
    $("#teacherlist").on('click', "#check", function () {
      console.log(123)
      $("#teacherModal").modal(); //显示模态框
      //发送ajax请求 渲染模态框的内容
      var tc_id = $(this).parent().data("id");
      $.get({
        // type: 'get',
        url: '/api/teacher/view',
        data: {
          tc_id: tc_id
        },
        success: function (info) {
          if (info.code == 200) {
            var html = template("moduletemp", info.result);
            $("#teacherModal").html(html);
          }
        }
      })
      return false; //点击事件都要阻止默认行为 阻止跳转
    });

    //注销按钮功能实现 点击事件  发送请求注销 后台就会注销并更新数据

    $("#teacherlist").on('click', "#delete", function () {
      var tc_id = $(this).parent().data("id");
      var tc_status = $(this).parent().data("status");
      var $that = $(this);
      $.ajax({
        type: 'post',
        url: '/api/teacher/handle',
        data: {
          tc_id: tc_id,
          tc_status: tc_status
        },
        success: function (info) {
          console.log(info.result.tc_status);
          if (info.code == 200) {
            if (info.result.tc_status == 1) {
              $that.html('启用').removeClass('btn-warning').addClass('btn-success');
            } else {
              $that.html('注销').removeClass('btn-success').addClass('btn-warning');
            }
            $that.parent().data('status', info.result.tc_status);
          }
        }
      })
    });

    //编辑按钮功能实现  存储tc_id到cookie中给到add.html
    $("#teacherlist").on('click', '#editor', function () {
      $.cookie('tc_id', $(this).parent().data('id'));
    });

    //添加教师按钮功能 跳转到add.html 清空cookie中的tc_id
    $("#addnewteacher").on('click', function () {
      $.removeCookie('tc_id');
      console.log($(this).attr('href'))
      location.href = $(this).attr('href');
      return false;
    })
  })
});