// 布尔类型
let isDone: boolean = false;

// 数值类型
let num: number = 10;
let num1: number = 0xf00d; // 二进制，八进制，十进制，十六金总

// 字符串类型
let str: string = 'Tom';

// null/undefined 它两未任何类型的子类型，所以可以赋值给其他类型不报错
let num2: number = undefined;
num2 = null;

// never 抛出异常或者无法执行到的终点
let ne: never;
ne = (() => {
    throw new Error('抛出错误');
})()
ne = (() => {
    while (true) { }
})()

// any任意类型 
let y: any = 'str';
y = 7;
// 未声明的变量会被指定为any
let z;
z = 'str';
z = 7;

// 联合类型
let unionType: string | number;
unionType = 'str';
unionType = 1;

// 枚举
// 我理解为键<=>值 
enum Color { // Color相当于{ '0': 'Red', '1': 'Blue', '2': 'Black', Red: 0, Blue: 1, Black: 2 }
    Red,
    Blue,
    Black
}
console.log(Color)
console.log(Color['Red'] === 0);
console.log(Color[0] === 'Red');
console.log(Color['Blue'] === 1);
console.log(Color[1] === 'Blue');
console.log(Color['Black'] === 2);
console.log(Color[2] === 'Black');
// 也可以自己初始化值 如果没有赋值从0开始，赋值后面++
enum Color1 {
    Red, // 0
    Blue = 2, // 2
    Black // 3
}
// 常数枚举 会在编译阶段删除，不包含计算成员
const enum Color3 {
    Red,
    Blue,
    Black
}
let red = Color3.Red, blue = Color3.Blue; // 编译结果为let red = 0, blue = 0;
// 赋值其他类型
enum Color4 {
    Red,
    Blue,
    Black = 'black'
}
console.log(Color4.Black); // black
console.log(Color4['black']); // 报错 其他类型不可逆向推导 
// 尽量不要自己去手动设置枚举值
enum Color5 {
    Red = 1,
    Blue,
    Black = 2
}
console.log(Color5.Blue === Color5.Black); // true

// 类型推断 定义的时候赋值则会产生类型推断，不赋值则推断成为any
let typeInfer = 'str'; // 类型推断为string
typeInfer = 10; // 报错 

// 类型断言 语法<类型>值
function getLength(something: string | number): number {
    return something.length; // 报错，number没有length方法
}
// 正确使用
function getLength(something: string | number): number {
    if (<string>something) {
        return (<string>something).length; // 下边使用也必须使用类型断言
    } else {
        return something.toString().length;
    }
}
function getBoolean(something: string | number | boolean): boolean { // 加入boolean,不报错
    return <boolean>something; // 因为传入类型没有boolean类型报错
}