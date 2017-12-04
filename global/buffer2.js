//buffer对象的一些方法

//1.buf.writer(String,buf的偏移量，写入长度，编码格式)
var str = "miaov";
var buf = new Buffer(5);

buf.write(str,2,2,'utf8');

console.info(buf);

//2.buf.toString(encoding,start,end)
var bfString = new Buffer("miaov");
console.info(bfString.toString('utf8',2,4));

//注意中文乱码
var str1 = "我爱你";
var bfString1 = new Buffer(str1);
console.info(bfString1.toString('utf8',1,8));

//3.buf.toJson()
console.info(bfString1.toJSON());

//4.slice方法 使用slice方法 会改变原先buffer的引用
var hisBuf = new Buffer("他爱你");
console.info(bfString1);
console.info(hisBuf);

var sliceBuf = bfString1.slice(0,6);
console.info(sliceBuf);
console.info(sliceBuf.toString("utf8"));

console.info(bfString1);

//5.buf.copy(targetBuf,targetStart,sourceStart,sourceEnd)
var copyBuf = new Buffer(10);

hisBuf.copy(copyBuf,1,4,7);

console.info(copyBuf);