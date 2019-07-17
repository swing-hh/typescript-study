// 命名规则和js是一样得
// 规则 var [变量名]: [类型] = 值;
{
    let uname: string = "摇摆";
    let name; // undefined 没有最外层得{}报错，由于分析到再整个目录下边有其他得name，这样全局命名就有问题
    let n; //type是any,值为undefined

    // 类型断言 可以把str转成number类型
    let str = '1';
    let str2: number = <number><any>str; //str、str2 是 string 类型
    console.log(str2);

    // 数字
    let num1: number = 1;
    let num2: number = 1.5;
    console.log(num1 + num2);

    //类型推断，
    var num = 2;
    // num = '12'; 当num=2得时候类型推断他为number，当后边从新赋值为"12"时就报错了。
}
// 作用域
var global_num = 12; // 全局作用域
class Numbers {
    num_val = 13; // 类作用域 类似于constructor中的this.num_val = 13;
    static sval = 10; // 静态变量 类似于Numbers.sval = 10;
    storeNum(): void {
        var local_num = 14; // 局部变量
    }
}
console.log(global_num);
console.log(Numbers.sval);
var numbersObj = new Numbers();
console.log(numbersObj);

