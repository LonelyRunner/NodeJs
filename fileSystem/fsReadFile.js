//fs.readFile(pathName,[options],callback)

var fs = require("fs");

fs.readFile("./test.txt",function(err,readBuf){
    console.info(readBuf.toString());
});

//同步方法
var str = "test.txt中的内容是："+fs.readFileSync("./test.txt");

console.info(str);

//重命名  fs.rename(oldPath,newPath,callback)
fs.rename("./test.txt","test1.txt",function(err){
    if(err){
        console.info("重命名失败");
    }
});
