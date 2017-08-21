define([
    'jquery',
    'jquery_cookie'
], function ($) {
    // 'use strict';
    //用来放置aside和header的功能实现 这里是所有主页面的公共部分  在js.html中引入 然后js.html被各个页面引入
    // console.log(location.pathname);
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
            // console.log(location.pathname)
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

        //4.头部登出功能
        $('#logout').click(function(){
            //发送退出登录的ajax请求
            $.post("/api/logout",function(info){
                //退出成功的时候,后台直接清空了PHPSESSID
                if(info.code==200){
                    //退出成功记得清空cookie
                    $.removeCookie("userinfo");
                    location.href="/login";
                }
            })

            return  false;
        })
    }
});