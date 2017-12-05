//监听一个文件发生的变化  fs.watch(pathname,options,listener)

var fs = require("fs");

fs.watch("test.txt",function(ev,filename){
    console.info(ev);
    if(ev){
        console.info(filename+"发生了改变");
    }
});