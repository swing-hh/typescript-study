// 使用/// <reference path = "文件" /> 的方式引用  编译的时候使用  tsc --out app.js .\nameSpace1.ts 不能用tsc .\nameSpace1.ts直接编译
/// <reference path = "nameSpace.ts" />  
var obj =  new Drawing.Some('yaobai')
console.log(obj)

// 错层嵌套使用.的方式获得下一层嵌套
var obj1 = new namespace_name1.namespace_name2.Dog()
console.log(obj1)