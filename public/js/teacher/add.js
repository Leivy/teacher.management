define(['jquery', 'template', 'tool', 'datepicker', 'datepicker_zh', 'jquery_cookie'], function ($, template, tool) {
  $(function () {
    //判断是哪个按钮点击跳转到add.html的  通过location是否拼接参数来确定
    //先封装获取地址栏参数的方法  在common里新增tool.js存放
    // var tc_id = tool.getPra(tc_id);
    // console.log(tc_id);
    var tc_id = tool.getPra("tc_id");
    if (typeof (tc_id) == "string") {
      //编辑功能实现
      var url = "/api/teacher/update";
      //编辑接口 拉取数据渲染页面
      $.ajax({
        type: 'get',
        url: '/api/teacher/edit',
        data: {
          tc_id: tc_id,
        },
        success: function (info) {
          if (info.code == 200) {
            info.result.title = '讲师编辑';
            info.result.btnTxt = '编 辑';
            var html = template('teacherAddTemp', info.result);
            $("#tcFormWrap").html(html);
            //加载插件设置日期
            getDate("#tc_join_date");
          }
        }
      })
    } else {
      //添加功能实现
      var url = "/api/teacher/add";
      var html = template('teacherAddTemp', {
        title: '讲师添加',
        btnTxt: '添 加'
      });
      $("#tcFormWrap").html(html);
      getDate("#tc_join_date");
    }

    //点击保存按钮 将编辑和添加的ajax写一起 用表单序列化传输参数,编辑按钮需要的特殊值tc_id需要用隐藏域来实现传递参数
    $('body').on('click', '#editor_add', function () {
      $that = $(this);
      $.ajax({
        type: 'post',
        url: url,
        data: $('form').serialize(),
        success: function (info) {
          if (info.code == 200) {
            console.log()
            location.href = $that.attr('href');
          }
        }
      });
      return false;
    });

    //添加插件
    function getDate(ele) {
      $(ele).datepicker({
        autoclose: true,
        endDate: "0d",
        format: "yyyy-mm-dd",
        language: "zh-CN",
        todayBtn: "linked",
        todayHighlight: true

      });
    }

  })
})