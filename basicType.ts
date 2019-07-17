// 数字类型
const binaryLiteral: number = 0b1010; // 二进制
const octalLiteral: number = 0o744; // 八进制
let decLiteral: number = 6; //十进制
let hexLiteral: number = 0xf00d; // 十六进制
console.log(binaryLiteral);
console.log(octalLiteral);
console.log(decLiteral);
console.log(hexLiteral);

// 字符串类型
let yao: string = 'yaobai'; //单引号
let li: string = "chunjing"; //双引号
let words: string = `你好${yao},你的妻子${li}去干活了`;

// 布尔类型
const flag: boolean = true;

//数组
let arr: number[] = [121, 23]; //普通数组
let arr1: Array<number> = [1, 2]; // 数组泛型 *泛型这块页没有太明白，跟普通的数据有啥区别呢 单抽出identity.ts去练习

//元组
let x: [string, number];
x = ['yaobai', 1];
// x = [1, 'yaobai']; 报错，位置对应类型错误

// 枚举 返回的是索引index *这个需要在深入了解一下 单抽出enum.ts去练习
enum Color { Red, Green, Blue };
let a: Color = Color.Red;
let b: Color = Color.Green;
let c: Color = Color.Blue;
console.log(a);
console.log(b);
console.log(c);
console.log(Color)

// void 表示方法返回类型为无，没有返回值
function fun(): void {
    console.log('我是一个没有返回值的fun')
}
fun();

//null
let myNull = null;

//undefined
let myUndefined = undefined;
console.log(myUndefined);

//never 包含null和undefined的子类型，代表不会出现的值  *直接赋值会报错，了解一下为啥，never的应用场景是啥 #答案never不能赋值普通类型，它变现为抛出异常或程序无法执行的终止点
// let myNever = never;

// any不明确的类型可以使用any，其实any就是像平时写js一样没有类型机制
let myAny: any = 'string'
myAny = 1;
myAny = false;
// myAny.ifItExists(); 因为是any所以写的时候不会报错，因为不检查
// myAny.toFixed();
myAny = [1, false, 'string'];
myAny[0] = null;

// null和undefined是任何类型，如果不开启--strictNullChecks严格校验特性
console.log(typeof null); //null表示没有空对象引用
let myUndefined1: number;
myUndefined1 = 1;
// myUndefined1 = null; null和undefined是任何类型，如果不开启--strictNullChecks严格校验特性是不会报错的
// myUndefined1 = undefined;
// 可以使用下边这种写法 开启--strictNullChecks严格校验特性也不会报错
let myUndefined2: number | null | undefined;
myUndefined2 = 1;
myUndefined2 = null;
myUndefined2 = undefined;

let myStringNumber: number | string; // 延申可以使用多种类型方式
myStringNumber = 10;
myStringNumber = 'string';

//never类型 通常表现为抛出异常或无法执行到的终点（例如死循环） 函数(): 类型 这个类型是返回值的类型
let myNever: never;
let myNumber: number;
myNever = (() => {
    throw new Error('错误终止点');
})();
myNumber = (()=>{
    throw new Error('never就像null和undefined一样，赋值给其他类型不报错');
})();
function error(message: string): never{
    throw new Error(message);// never必须有终结
}
function loop(): never{
    while(true){}// 或者函数永远无法执行到的
}

