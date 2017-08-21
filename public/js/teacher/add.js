define(['jquery'], function ($) {
  $.ajax({
    type: 'get',
    url: '/api/teacher/edit',
    data: {
      tc_id: 2
    },
    success: function (info) {
      console.log(info);
    }
  })
})