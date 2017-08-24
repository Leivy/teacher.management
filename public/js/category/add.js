define([
  'jquery',
  'template',
  'tool'
], function ($, template, tool) {
  'use strict';
  $(function () {
    var cg_id = tool.getPra('cg_id');
    if (typeof (cg_id) != "object") {
      //编辑
      var url = '/api/category/modify';
      //根据地址栏的参数来渲染表单
      $.ajax({
        type: 'get',
        url: '/api/category/edit',
        data: {
          cg_id: cg_id
        },
        success: function (info) {
          if (info.code == 200) {
            info.result.title = "课程编辑";
            info.result.btnTxt = "编辑";
            var html = template('cateadd', info.result);
            $(".catewrap").html(html); //拿取cg_id对应的数据渲染编辑页面
            $("#selectget").val(info.result.cg_pid); //让select框的value等于需要被选中的option的value,即会让那个option被选中
          }
        }
      });
    } else {
      //添加
      var url = '/api/category/add';
      //发送顶级分类请求,渲染级别下拉选项
      $.ajax({
        type: 'get',
        url: '/api/category/top',
        success: function (info) {
          if (info.code == 200) {
            var html = template('cateadd', {
              title: '课程添加',
              btnTxt: '添加',
              top: info.result
            });
            $(".catewrap").html(html);

            // $("#cg_name").val('要啥自行车');
            // setTimeout(function () {
            //   $("#savebtn").click();
            // }, 0);

          }
        }
      });
    }
    //保存按钮注册事件发送请求 委托事件
    $("body").on('click', '#savebtn', function () {
      $.ajax({
        type: 'post',
        url: url,
        data: $('form').serialize(),
        success: function (info) {
          if (info.code == 200) {
            location.href = '/category/list'
          }
        }
      })

      return false;
    });
  })
});