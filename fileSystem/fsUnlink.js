//删除文件 fs.unlink(pathName,callback)

var fs = require("fs");

//先判断文件是否存在
fs.exists("./test.txt",function(exists){
    console.info(exists);
    if(exists){
        fs.unlink("./love.txt",function(err){

        });
    }

});


fs.stat("./test.txt",function(err,stats){
    console.info(stats);
});