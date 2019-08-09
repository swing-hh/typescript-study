// 函数输入输出都需要类型约束
// 函数声明
function sum(x: number): number {
    return x;
}

// 函数表达式
let sum2 = function (x: number): number {
    return x;
}

// 箭头函数
let sum3 = (x: number): number => {
    return x;
}

// 无返回值
function sum1(x: number): void {
    x++;
}

// 可选参数
function sum4(x: number, y?: string): number {
    return x;
}
sum4(1);

// 参数默认值 有默认值不传也没问题
function sum5(x: number, y: string = 'str'): string {
    return y;
}
sum5(1);

// 剩余参数 items是一个数组
function sum6(...items: number[]): number {
    items.forEach(function (item) {
        console.log(items[item])
    })
    return items.length
}
sum6(1, 2, 3, 4, 5);

// 函数重载 可以进行多次重载以精确的表达输入输出
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}

// 接口定义函数
interface SearchFunc {
    (source: string, subString: string): boolean;
}
let mySearch: SearchFunc = function (source: string, subString: string): boolean {
    return source.search(subString) !== -1;
}
