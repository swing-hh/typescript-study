// js是没有enum类型的，这是ts对于js的扩充，对于c#来说不陌生
// 通常默认情况下枚举是基于0的
/*
    观察编译js的结果
    var Color;
    (function (Color) {
        Color[Color["red"] = 0] = "red";
        Color[Color["green"] = 1] = "green";
        Color[Color["blue"] = 2] = "blue";
    })(Color || (Color = {}));
    Color = { '0': 'red', '1': 'green', '2': 'blue', red: 0, green: 1, blue: 2 };
    我简单的理解enum就是对象{键<=>值，键<=>值}的形式，使访问键值不必再去遍历更加方便
*/
enum Color {
    red,
    green,
    blue
}
let a: Color = Color.red;
let b: Color = Color.green;
let c: Color = Color.blue;
console.log(Color);
console.log(a);
console.log(b);
console.log(c);
console.log(Color[0]);
console.log(Color[1]);
console.log(Color[2]);

// 枚举基值不设置为0, 观看编译后的情况可以看到，如果不初始化默认值使从0开始的，设置值之后他后边的值默认+1的。
enum Doc {
    keji,
    jinmao = 4,
    samo
}
// 常量枚举 这样直接变编译成var blue = 2 /* blue */;不会再初始花Cat这个变量了，这样我们就没办法使用Cat[0]获得red了
const enum Cat {
    red,
    green,
    blue
}
let blue: Cat = Cat.blue;

// 初始值设置为1以后两个就是2，3。初始值不设置就是0，1，2
enum Color1 { Red = 1, Green, Blue }
let c1: Color1;
if (!c1) { //undefined
    console.log('Yes, I am not defined.');
}
c1 = Color1.Red;
if (!c1) { // 0
    console.log('Oops, I have a valid value, but seems I am undefined!');
}

// 尽量不要手动去设置枚举值, 这样会造成程序稳定性受到影响
enum Color2 {
    red = 2,
    green,
    blue = 3
}
console.log(Color2.green) // 3
console.log(Color2.blue) // 3
console.log(Color2.green === Color2.blue) // true

// 枚举设置字符串类型, 如果初始值为string，后边因为+1得不到所以报错，设置最后一个没问题
enum Str {
    str1 = 'string1',
    str2 = 'string2',
    str3 = 'string3'
}
console.log(Str.str1); // 字符串类型根据键可以找到值
console.log(Str['string1']); //根据值找不到键，得到undefined

