{
    // 函数定义 在一个编译环境下名字只允许出现一次 ?代表这个参数是选填的 =设置默认参数
    function test(val: number, val2 = 1, val1?: number): void {
        console.log(arguments)
        console.log("调用函数")
    }
    test(1)              // 调用函数
    // 剩余参数 ...
    function test1(...nums: number[]) {
        var num: number = 0
        for (var i = 0; i < nums.length; i++) {
            num += nums[i]
        }
        return num
    }
    console.log(test1(1, 2, 3, 4, 5))
    // 匿名函数 跟普通的函数差不多
    var fun1 = function (num: number): number {
        console.log('函数执行')
        return num
    }
    console.log(fun1(1))
    //  使用构造函数创建函数 使用字符串的方式
    var fun2 = new Function('a', 'b', 'return a*b')
    console.log(fun2(3, 4))
    // 递归函数
    function factorial(num: number) {
        if (num === 1) {
            return 1
        } else {
            num--
            console.log(num)
            factorial(num)
        }
    }
    console.log(factorial(8))
    // lambda 函数 交投函数 单个参数可以用（）
    let foo = (x: number) => x * 10
    foo(1)
    // 函数重载 定义：参数不同，返回值可同可不同的相同函数，
    function disp(s1: string): void;
    function disp(n1: number, s1: string): void;

    function disp(x: any, y?: any): void {
        console.log(x);
        console.log(y);
    }
    disp("abc")
    disp(1, "xyz");
}