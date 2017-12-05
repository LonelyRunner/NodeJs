//文件打开读写关闭操作

//1.以一个buffer写入文件 fs.write(fd,buffer,offset,length,position,callback)
//各个参数的解析见 fsRead.js文件

var fs = require("fs");

//ex1:
fs.open("./test.txt","r+",function(err,fd){
    if(err){
        console.info("打开test.txt文件失败");
    }else{
        fs.open("./../fuck","r",function(err1,fd1){
            if(err1){
                console.info("打开fuck文件失败");
            }else{
                var readBuffer = new Buffer(100);
                fs.read(fd1,readBuffer,0,99,0,function(readErr,bytesRead,readBuf){
                    if(readErr){
                       console.info("读取fuck文件失败");
                    }else{
                        var writeBuffer = readBuf;
                        fs.write(fd,writeBuffer,0,99,21,function(writeErr,bytesWrite,writeBuf){
                           if(writeErr){
                               console.info("写入文件失败");
                           }else{
                               console.info("写入文件成功！");
                           }
                        });
                    }
                })
            }
        });
    }
});

//ex2:以一个String方式写入文件
//fs.write(fs,string,position,encoding,callback);

fs.open("./test.txt","r+",function(err,fd){
    var writeStr = "到底什么时候是个尽头？";
    fs.write(fd,writeStr,21,"utf-8",function(err,bytesWrite,writeBuf){
        if(!err){
            console.info("文件写入成功！");
        }
    });
});