define([], function (require, factory) {
  'use strict';

  //1.功能:获取地址栏参数 使用:传入参数返回值;不传参数返回地址栏参数对象
  function getPra() {
    //先获取地址栏参数字符串
    var pra = arguments[0];
    var pram = location.search;
    //再去除第一个问号
    pram = pram.slice(1);
    //将参数字符串切割成数组形式
    var pramArr = pram.split("&");
    //再将数组转换成对象形式
    var pramObj = {};
    pramArr.forEach(function (v, i) {
      var key = v.split("=")[0];
      var value = v.split("=")[1];
      pramObj[key] = value;
    });
    return pramObj[pra] || pramObj;
  }

  //tool的产出如下:
  return {
    getPra: getPra
  }
});