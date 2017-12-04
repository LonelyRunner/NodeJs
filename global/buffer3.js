//Buffer的对象方法 即静态方法
//1.Buffer.isEncoding()  是否为buffer支持的编码格式

console.info(Buffer.isEncoding("utf-8"));
console.info(Buffer.isEncoding("gbk"));
console.info(Buffer.isEncoding("ascii"));

//2.isBuffer()  判断一个对象是否为Buffer对象

var array = [1,2,4];
console.info(Buffer.isBuffer(array));

var buf = new Buffer(10);
console.info(Buffer.isBuffer(buf));

//byteLength : buffer的字节长度

console.info(Buffer.byteLength("String",'utf-8'));
//注意  汉字的时候  不同的编码类型字节长度不同
console.info(Buffer.byteLength("我爱你",'utf-8'));
console.info(Buffer.byteLength("我爱你",'ascii'));

//concat(target,targetLength)

var list = [new Buffer([1,2,3,4]),new Buffer("CNMD")];
console.info(Buffer.concat(list,8));

//process的标准输入流

process.stdin.resume();

process.stdout.write("请输入：");

process.stdin.on("data",function(chunk){
    //输出的是字符串
    process.stdout.write(chunk);
    //输出的buffer
    console.log(chunk);
});