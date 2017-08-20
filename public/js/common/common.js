define([
    'jquery',
    'jquery_cookie'
], function ($) {
    // 'use strict';
    //用来放置aside和header的功能实现 这是所有主页面的公共部分
    console.log(location.pathname);
    if (location.pathname !== "/login") {
        //1.aside部分渲染头像和名称 存储在cookie中
        var userinfo = JSON.parse($.cookie().userinfo);
        // console.log(userinfo);
        $(".avatar img").attr("src", userinfo.tc_avatar);
        $(".profile h4").html(userinfo.tc_name);

        //2.列表点击显示高亮 页面会跳转 所以不能注册点击事件
        // console.log(location);
        var $links = $(".list-unstyled a");
        $links.each(function () {
            console.log(location.pathname)
            var $that = $(this);
            if (location.pathname == $that.attr("href")) {
                $that.addClass("active");
            }
        });
        //3.点击课程管理显示二级菜单
        $("#secondary_menu").click(function(){
            $(this).find(".list-unstyled").slideToggle();
        });
        $(".list-unstyled").find(".active").parent().parent().show();

    }
});