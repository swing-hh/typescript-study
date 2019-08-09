// 类实现接口 
// 面向对象很重要的概念是类(classes)去实现(implements)接口(interfaces)
interface Alarm {
    interest: number; // 必须实现得属性
    alert(); // 必须实现的方法
}
interface Light {
    lightOn();
    lightOff();
}
class Car implements Alarm, Light { // 使用,实现多个接口
    interest: number;
    constructor(interest: number) {
        this.interest = interest;
    }
    alert() {
        console.log('Car alert');
    }
    lightOn() {

    }
    lightOff() {

    }
}

// public private 和 protected
class Animal {
    public name; // 公共属性 全部能访问
    protected color; // 受保护的属性 自己和子类能访问
    private age; // 私有的属性 只有自己能访问

    public constructor(name, color, age) {
        this.name = name;
        this.color = color;
        this.age = age;
    }
}
class Cat extends Animal {
    constructor(name, color, age) {
        super(name, color, age);
        console.log(this.name)
        console.log(this.color)
        console.log(this.age) //报错 私有属性
    }
}
let an = new Animal('tom', 'black', 18);
console.log(an.name);
console.log(an.color); // 报错 受保护不允许访问
console.log(an.age); // 报错 私有不允许访问

// abstract 抽象类 不允许被实例化
abstract class Animal1 {
    public name;
    public constructor(name) {
        this.name = name;
    }
    public abstract sayHi(); // abstract 必须实现的抽象方法
}
new Animal1('Tom'); // 报错 抽象类不允许实例化
class Cat1 extends Animal1 {
    public sayHi() {
        console.log(`Meow, My name is ${this.name}`); //抽象类中已经定义了name，继承后可以直接使用
    }
}
let cat = new Cat1('Tom');

// 接口继承类
class Point {
    x: number;
    y: number;
}
interface Point3d extends Point {
    z: number
}
let point3d: Point3d = {
    x: 1,
    y: 2,
    z: 3
}