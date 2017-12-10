//使用fs将html和js分离

var http = require("http");
var fs = require("fs");
var url = require("url");
var querystring = require("querystring");

var HTMLDir = __dirname+"/html/";

//创建一个服务器
var server = http.createServer();

server.on("request",function(req,res){

    // var urlStr = url.parse(req.url);
    //
    // console.info(HTMLDir + urlStr.pathname);
    //
    // tranToData(HTMLDir + urlStr.pathname,req,res);

    console.info(url.parse(req.url).pathname);
    var urlStr = url.parse(req.url).pathname;

    switch(urlStr){
        case "/":
            tranToData(HTMLDir+"index.html",req,res);
            break;
        case "/user":
            tranToData(HTMLDir+"user.html",req,res);
            break;
        case "/login":
            tranToData(HTMLDir+"login.html",req,res);
            break;
        case "/login/check":
            // tranToData(HTMLDir+"login.html",req,res);

            //通过get方法
            // var requestMethod = req.method;
            // var requestObj = querystring.parse(url.parse(req.url).query);
            // res.writeHead(200,{
            //     "content-type":"text/html;charset=utf8"
            // });
            //
            // console.info(requestObj);
            //
            // res.write("请求的方法是："+requestMethod);
            // res.end();

            //通过post请求
            if(req.method.toUpperCase() == "POST"){

                var str = "";

                req.on("data",function(chunk){
                    str += chunk;
                });

                req.on("end",function(){
                    console.info(str);
                    console.info(querystring.parse(str));
                });
            }

            break;
        default :
            tranToData(HTMLDir+"err.html",req,res);
            break;
    }

});

function tranToData(pathname,req,res){

    fs.readFile(pathname,function(err,chunk){
        if(err){
            res.writeHead(400,{
                "content-type":"text/html;charset=utf8"
            });
            res.end("访问页面出错！");
        }else{
            res.writeHead(200,{
                "content-type":"text/html;charset=utf8"
            });
            res.end(chunk);
        }
    })
}

//监听端口号和主机名
server.listen(8080,"localhost");