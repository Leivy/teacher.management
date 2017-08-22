define(['jquery', 'template', 'jquery_cookie'], function ($, template) {
  $(function () {

    // if ($.cookie('tc_id')) {
    //   //list.html页面点击编辑时已经存储下tc_id到cookie中
    //   var tc_id = $.cookie('tc_id');
    //   $.ajax({
    //     type: 'get',
    //     url: '/api/teacher/edit',
    //     data: {
    //       tc_id: tc_id
    //     },
    //     success: function (info) {
    //       if (info.code == 200) {
    //         // var html = template('teacheraddtemp', info.result);
    //         // $(".teacher-add").html(html);
    //       }
    //     }
    //   });

    //   //编辑添加按钮功能 点击事件发送请求修改教师信息 委托事件
    //   $('.teacher-add').on('click', '#editor_add', function () {
    //     $that = $(this);
    //     $.ajax({
    //       type: 'post',
    //       url: '/api/teacher/update',
    //       data: {
    //         tc_id: tc_id || 0,
    //         tc_name: $("#tc_name").val().trim(),
    //         tc_join_date: $("#tc_join_date").val().trim(),
    //         tc_type: $('.tc_type>option:selected').text() == '讲师' ? 1 : 0,
    //         tc_gender: $('.tc_gender input:checked').text() == '男' ? 0 : 1,
    //         tc_pass: $("#tc_pass").val() || 0
    //       },
    //       success: function (info) {
    //         if (info.code == 200) {
    //           // alert('save success');
    //           // location.href = $that.attr('href');
    //         }
    //       }
    //     });

    //     return false;
    //   });
    // }

    // //新增添加按钮功能 点击事件发送请求添加教师信息 
    // $('.teacher-add').on('click', '#editor_add', function () {
    //   $that = $(this);
    //   $.ajax({
    //     type: 'post',
    //     url: '/api/teacher/add',
    //     data: {
    //       tc_name: $("#tc_name").val().trim(),
    //       tc_join_date: $("#tc_join_date").val().trim(),
    //       tc_type: $('.tc_type>option:selected').text() == '讲师' ? 1 : 0,
    //       tc_gender: $('.tc_gender input:checked').text() == '男' ? 0 : 1,
    //       tc_pass: $("#tc_pass").val() || 0
    //     },
    //     success: function (info) {
    //       console.log(info)
    //       if (info.code == 200) {
    //         // alert('save success');
    //         // location.href = $that.attr('href');
    //       }
    //     }
    //   });

    //   return false;
    // });

  })
})