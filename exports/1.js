/*
    外部文件访问本文件中的非全局变量的三种方式
    1.将变量定义为全局变量
    2.使用module.exports对象
    3.使用exports对象        module.exports === exports  is true!
 */

//每个文件就是一个模块  而且每个模块都有自己的module对象  console.info(module);

var a = "这是一个数字：100";

module.exports.a = a;

//或者exports.a = a;

//尽量避免使用module.exports = [12,32,24] 这将改变exports和module.exports的指向