var student = require("./student.js");
var teacher = require("./teacher.js");

function add(teacherParam,studentList){
    teacher.add(teacherParam);

    studentList.forEach(function(item){
        student.add(item);
    });
}

exports.add = add;
//module.exports = add;