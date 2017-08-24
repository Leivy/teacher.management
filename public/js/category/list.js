define([
  'jquery',
  'template'
], function ($, template) {
  'use strict';
  $(function () {

    $.ajax({
      type: 'get',
      url: '/api/category',
      success: function (info) {
        if (info.code == 200) {
          var html = template('catelist', info);
          $("#catewrap").html(html);
        }
      }
    });
    // $("#demowww").click(function () {
    //   console.log(1);
    //   // location.href='category/add';
    //   return false;
    // })
    // setInterval(function () {
    //   $("#demowww").click();
    // }, 0);

  })
});