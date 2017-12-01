//局部变量
var a = 100;

//全局变量
global.a = 200;

console.info("局部变量a="+a);
console.info("全局变量a="+global.a);

//javascript中的全局对象是window  nodejs中的全局变量是global

//__filename:输出当前文件的绝对路径
console.info(__filename);

//require方法
require('./2.js');

//模块加载机制
/*
    1.路径：相对路径和 绝对路径
        相对路径：记得加上'./'  如果不加  如require('fs')  表示加载nodeJs的核心组件，或者node_modules目录下面的文件
    2.加载顺序： 1.文件名称 -> +.js -> +.json -> +.node -> 报错
 */