//process对象：属于global对象  即：当前进程对象

console.info(process);

//或者：console.info(global.process);

//process的属性
console.info(process.argv);

console.info(process.env);

console.info(process.execPath);

//node.js是作用在OS上的  而js是作用于浏览器的

/**
  *  process的stdout和stdin ： 是标准的输出流和输入流
  */

//console.log : api
/*
    console.log = function(data){
        process.stdout.write(data);
    }
 */

//ex:
    function Log(data){
        process.stdout.write(data);
    }

    Log("万劫不复的境地，真的让人心力交瘁！");

    //使用标准输入流和标准输出流来实现控制台中简单的加减乘除
    var a,b;
    process.stdout.write("输入a的值：");

    //输入流默认是关闭的  使用前需要先启动输入流
    process.stdin.resume();

    //stdin 监听输入的data  回掉函数中的data为输入的data值
    process.stdin.on("data",function(data){
        if(!a){
            a = Number(data);
            Log("请输入b的值：");
        }else{
            b = Number(data);
            console.info("a+b="+(a+b));
        }
    });
