//文件系统1：

//1.fs.open()  打开一个文件
/**
    fs.open(path,flags,[mode],callback);
        path: 打开文件的路径
        flags: 打开方式：读/写
        mode: 打开模式，读/写/执行
        callback: function(err,fd){}
            err: 如果打开文件错误，则err中包含所有的错误信息。否则err为null
            fd：打开文件标识  如果打开文件错误 则fd为undefined
 */

//首先需要导入文件系统

var fs = require("fs");

fs.open("./../fuck",'r',function(err,fd){
    if(err){
        console.info("文件打开失败");
    }else{
        console.info("文件打开成功");
        console.info(fd);
    }
});

//再次打开文件时  fd的值会发生变化
fs.open("./../fuck",'r',function(err,fd){
    if(err){
        console.info("文件打开失败");
    }else{
        console.info("文件打开成功");
        console.info(fd);
    }
});

//fs.open()方式是异步版  执行时不会阻塞其他线程的运行

//fs.openSync()  是打开文件的同步版本  会返回一个fd

var fd = fs.openSync("./../fuck",'r');

console.info(fd);
