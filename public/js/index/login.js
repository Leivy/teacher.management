require(["jquery","jquery_cookie"], function () {
    $("button").click(function () {

        $.ajax({
            type: "post",
            url: "/api/login",
            data: $("form").serialize(),
            success: function (info) {
                // console.log($("form").serialize());
                // console.log(info);
                if (info.code == 200) {
                    //登录成功
                    //保存用户信息到cookie中 cookie会将对象toString,所以先转换为json格式
                    var userinfo = JSON.stringify(info.result);
                    $.cookie("userinfo", userinfo, {
                        path: "/",
                        expires: 1
                    });
                    //设置页面跳转
                    location.href = "/"; //根目录
                }
            }
        });
        return false;
    });
})