//打开文件的后续操作  ：  读文件 /  写文件

//fs.read(fd,buffer,offset,length,position,callback)  读文件的异步方式
/**
    fd: 打开文件的返回值
    buffer: 读取到的数据会添加到此buffer中  [buffer、String、array]
    offset：buffer中添加数据的起始位置
    length：添加数据的长度
    position：打开的文件中 读取数据的起始位置
    callback: function(err,bufferLength,buffer){}
            err: 读取过程中出现错误。  否则为null
            bufferLength: 读取到的数据的长度
            buffer： 同前面的buffer
  */

//ex
    var fs = require("fs");

    fs.open("./../fuck","r",function(err,fd){
        if(err){
            console.info("打开文件出错");
        }else{
            var buffer = new Buffer(30);
            fs.read(fd,buffer,0,21,0,function(err,bufLength,buf){
                if(!err){
                    console.info("文件读取成功");
                    console.info(buffer);
                    console.info(buf);
                }
            })
        }
    });

//fs.readSync(fd,buffer,offset,length,position)    文件读取的同步方式  返回bytesRead 的数量

    var fd = fs.openSync("./../fuck","r");
    var buffer = new Buffer(30);
    var bytesRead = fs.readSync(fd,buffer,0,21,0);
    console.info(bytesRead);