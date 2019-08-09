// 接口-定义对象类型
// 在面向对象语言中接口是很重要得概念，是对行为得抽象，类（classes）去实现（implement）接口（Interfaces）
// 简单例子
interface Person {
    name: string,
    age: number
}
let tom: Person = { // 定义tom这个变量，这就约束tom的形状必须和接口Person一直，多一些少一些都会报错
    name: 'Tom',
    age: 25
}
// 使用?定义可选属性 任意属性
interface Person1 {
    name: string;
    age?: number; // number不是string的子集报错
    [propName: string]: any // 使用[propName: string]定义任意属性键string类型，propName随便起名，如果有任意属性可选类型必须是它的类型的子集
}
let tom1: Person1 = {
    name: 'Tom',
    gender: 'male'
};
// 只读属性 readonly
interface Person2 {
    readonly id: number,
    name: string,
    age?: number,
    [name: string]: any
}
let tom2: Person2 = {
    id: 10,
    name: "Tom2"
}
tom2.id = 100; // 报错，只读属性不允许在赋值