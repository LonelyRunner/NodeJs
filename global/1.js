//__filename: 返回当前模块文件的绝对路径  非global对象
//__dirname: 返回当前模块文件所在目录的绝对路径 非global对象

console.info(__filename);

console.info(__dirname);

var a = setInterval(function(){
    var d = new Date();

    console.info("当前时间是："+d.getFullYear()+"年"+(d.getMonth()+1)+"月"+d.getDate()+"日 "+d.getHours()+"时"+d.getMinutes()+"分"+d.getSeconds()+"秒");
},1000);

setInterval(function(){
    clearInterval(a);
},3000);