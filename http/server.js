//使用nodejs创建一个服务

var http = require("http");

//创建一个简单的服务器
var server = http.createServer();

//当出现错误时  触发的事件
server.on("error",function(){
    console.info("服务器发生错误!");
});

//当连接成功时
server.on("listening",function(){
    console.info("Listening...");
});

//当有用户请求时
//server.on("request",function(req,res){});    req:客户端的请求信息  res：服务器返回给客户端的信息
server.on("request",function(req,res){
    console.info("有用户请求了...");

    //单独的去设置头信息  或者 设置自定义信息
    res.setHeader("node","node-server");

    res.writeHead("200","OK",{
        //content-type:text/plain  :以文本的方式进行解析
        "content-type":"text/html;encoding=utf-8"
    });

    //写数据方法
    res.write("<h1>Hello Node!</h1>");

    //end方法必须调用  否则所有的响应信息将得不到处理
    res.end();
});

//服务器监听的端口和主机
server.listen(8080,"localhost");

