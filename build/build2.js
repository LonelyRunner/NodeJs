//将两个文件内容合并  并写到另一个文件中

var fs = require("fs");

fs.watch("./../source",function(ev){

    fs.readdir("./../source",function(err,fileList){

        var arr = [];

        fileList.forEach(function(item){
            //先判断是否为file
           // var info = fs.statSync("./../source/"+item);
           // console.info(info);
            console.info(item);
        });

        // console.info(arr);

        var content = "";

        // arr.forEach(function(item){
        //     // fs.appendFileSync("./cnm.txt",fs.readFileSync("./../source/"+item));
        //     console.info("./../source/"+item);
        // });

    });

});