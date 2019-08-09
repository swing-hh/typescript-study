// 泛型就是在编译期间不确定是什么类型，需要在后期使用得时候指定类型
// 例1 泛型函数
// 获取Array<number>中得最小值
function getNumberMin(arr: number[]): number {
    var min = arr[0];
    arr.forEach((value) => {
        if (value < min) {
            min = value;
        }
    })
    return min;
}
// 获取Array<string>中得最小值
function getStringMin(arr: string[]): string {
    var min = arr[0];
    arr.forEach((value) => {
        if (value < min) {
            min = value;
        }
    })
    return min;
}
console.log(getNumberMin([1, 3, 5, 3, 4, 2, 0]));
console.log(getStringMin(['str4', 'str2', 'str1', 'str3']));

// 使用泛型获取数组中得最小值<T>表示通用泛型
function getMin<T>(arr: T[]): T {
    var min = arr[0];
    arr.forEach((value) => {
        if (value < min) {
            min = value;
        }
    })
    return min;
}
console.log(getMin<number>([1, 3, 5, 3, 4, 2, 0])); // 这种不传类型是因为又默认类型
console.log(getMin(['str4', 'str2', 'str1', 'str3'])); // 也可以不传，会根本你的参数定义类型

// 例2：泛型类 也是执行得时候规定类型
class GetMin<T>{
    arr: T[] = []; // 里面直接就是constructor
    add(ele: T) {
        this.arr.push(ele);
    }
    min(): T {
        var min = this.arr[0];
        this.arr.forEach((value) => {
            if (value < min) {
                min = value;
            }
        })
        return min;
    }
}
var numArr = new GetMin<number>();
numArr.add(3);
numArr.add(2);
numArr.add(7);
numArr.add(6);
console.log(numArr.min());

var strArr = new GetMin<string>();// 这种因为没有默认类型，所以必须添加<>来规定他的类型
strArr.add('str3');
strArr.add('str4');
strArr.add('str1');
strArr.add('str2');
console.log(strArr.min());

// 泛型约束
function loggingIdentity<T>(arg: T): T {
    console.log(arg.length); // 报错,因为类型的length方法不确定,所以编译报错
    return arg;
}

//泛型接口定义函数形状
interface CreateArrayFunc {
    <T>(length: number, value: T): Array<T>;
}
let createArray: CreateArrayFunc;
createArray = function <T>(length: number, value: T): Array<T> {
    let result: T[] = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}
createArray<string>(3, 'x'); // ['x', 'x', 'x']

// 泛型默认类型
function createArray1<T = string>(length: number, value: T): Array<T> {
    let result: T[] = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}