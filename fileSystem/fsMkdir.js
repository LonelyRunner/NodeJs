//创建新的文件夹 fs.mkdir(pathname,callback)

var fs = require("fs");

fs.mkdir("./1",function(){
    // console.info(arguments);
});


//删除一个文件夹  rmdir(path,callback)
// fs.rmdir("./1",function(){
//     console.info(arguments);
// });

//获取某一个文件夹下面的所有文件

fs.readdir("./",function(err,fileList){
    fileList.forEach(function(item){
        fs.stat(item,function(err,stats){
            if(stats.mode == 33206) {
                console.info("[文件] " + item);
            }else{
                console.info("[文件夹] " + item);
            }
        });
    });
});
