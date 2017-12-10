//url处理

var http = require("http");
var url = require("url");

var server = http.createServer();

server.on("request",function(req,res){
    //将请求的地址解析为一个Url对象
    //console.info(url.parse(req.url));

    console.info(req.url);

    switch(req.url){
        case "/":
            res.writeHead(200,{
                "Content-type" : "text/html;encoding=utf-8"
            });
            res.end("<h1>这是首页</h1>","utf-8");
            break;
        case '/user':
            res.writeHead(200,{
                "Content-type" : "text/html;encoding=utf-8"
            });
            res.end("<h1>这是用户首页</h1>","utf-8");
            break;
        default :
            res.writeHead(404,{
                "Content-type" : "text/html;encoding=utf-8"
            });
            res.end("<h1>页面访问出错</h1>","utf-8");
            break;
    }

});

server.listen(8080,"localhost");