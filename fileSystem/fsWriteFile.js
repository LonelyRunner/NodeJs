//写文件  fs.writeFile(pathName,data,callback)  异步方法  如果文件不存在  不会报错 并创建文件

var fs = require("fs");

fs.writeFile("./love.txt","我爱你",function(err){
   if(err){
       console.info("操作文件出错！");
   }
});

//写入文件的同步操作  fs.writeFileSync(pathname,data,options);  没有返回值或者返回值为undefined

//在文件中追加data  fs.appendFile(pathName,data,options,callback)  异步方法  如果文件不存在  则会创建新文件

fs.appendFile("./love.txt","我是追加的信息",function(err){
    if(err){
        console.info("文件信息追加失败！");
    }
});