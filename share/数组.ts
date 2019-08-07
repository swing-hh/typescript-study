// ts中数组定义方式比较灵活
// 最简单方式[类型+方括号]
let arr1: number[] = [1, 2, 3];
// 联合类型
let arr2: number[] | string[] = ['1', '2'];
// any
let arr3: any[] = [1, 'str', false, { name: 'yaobai' }];
// 数组泛型
let arr4: Array<number> = [1, 2, 3, 4];
// 接口表示泛型 [index: number]表示下标类型
interface NumberArray {
    [index: number]: number;
}
let arr5: NumberArray = [2, 4, 5];
// 类数组
function sum() {
    let arg: number[] = arguments; // 报错，常见的类数组都有自己的接口定义，例如IArguments, NodeList, HTMLCollection 等
}
// 元组 必须符合下标类型
let arr6: [string, number];
arr6 = ['str1', 1];
arr6 = [1, 1]; // 报错,0下标必须为string