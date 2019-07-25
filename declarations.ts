// 因为引用js文件，无法使用ts类型检查等特性功能，为了解决这个问题产生了这个js的声明文件，是为了使用js文件时也能做ts特性检查
// 下边声明的这句在编译成js文件后会从中删除
/// <reference path = "Calc.d.ts" /> 
var obj = new Runoob.Calc(); 
// obj.doSum("Hello"); // 编译错误
console.log(obj.doSum(10));