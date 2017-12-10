//nodejs前端自动化构建项目原理

var fs = require("fs");

var projectData = {

    name: 'miaov',
    fileList: [
        {
            name: 'html',
            type: 'dir'
        },
        {
            name: 'css',
            type: 'dir'
        },
        {
            name: 'js',
            type: 'dir'
        },
        {
            name: 'images',
            type: 'dir'
        },
        {
            name: 'index.html',
            type: 'file',
            content: '<html>\n\t<head>\n\t\t<title>\n\t\ttitle\n\t\t</title>\n\t</head>\n</html>'
        }
    ]

};

projectData.fileList.forEach(function(item){
    switch(item.type){
        case 'dir':
            var path = "./../"+projectData.name+"/"+item.name;
            fs.mkdirSync(path);
            // console.info("../"+projectData.name+"/"+item.name);
            break;
        case 'file':
            console.info("../"+projectData.name+"/"+item.name);
            fs.writeFileSync("../"+projectData.name+"/"+item.name,item.content);
            break;
        default:
            break;
    }
});