//buffer的三个创建方式

//1.var bf = new Buffer(size);  size[Number]:长度  创建好的buffer不能修改长度
    var bf = new Buffer(5);

    //创建好后会自动填充
    console.info(bf);

    bf[5] = 10;
    //长度不能修改  因此此次赋值并没有生效
    console.info(bf);

//2.var bf = new Buffer(array)   array:数组
    var bfArray = new Buffer([1,2,3]);

    bfArray[3] = 4;

    console.info(bfArray);

//3.var bf = new Buffer(String[,encoding])  string方式，encoding编码
    var bfString = new Buffer("CNMD","utf8");

    console.info(bfString);

    for(var i=0;i<bfString.length;i++){
        console.info(String.fromCharCode(bfString[i]));
    }

    //注意  bf.length指的是字节长度  不是字符串长度.主要原因是中文在不同编码中占位不同的字节
    //ex
        var str = "I love you!";
        var bf1 = new Buffer(str);
        console.info(str.length);
        console.info(bf1.length);

        var str1 = "我爱你";
        var bf2 = new Buffer(str1);
        console.info(str1.length);
        console.info(bf2.length);
