{
    class Site {
        name(): void {
            console.log('Name')
        }
    }
    var obj = new Site();
    obj.name();
    console.log(obj)
    // 写一个完整得类
    class Dog {
        // 声明参数类型
        name: string
        age: number
        // 静态得方法和属性都包含再Dog这个对象上
        static color: string = '#fff'
        constructor(name, age) {
            this.name = name
            this.age = age
        }
        jieshao() {
            console.log('我叫' + this.name)
        }
        // 声明返回值类型
        getAge(): number {
            return this.age
        }
        // static 声明类得方法
    }
    var diudiu = new Dog('diudiu', 2)
    console.log(diudiu)
    console.log(Dog.color)
    // 类得继承也使用extends方法 继承Dog得con 会把constructor 方法 静态属性方法全部继承过来，有重合得则会覆盖
    class Jinmao extends Dog {
        static color: string = 'yellow'
        doPrint() {
            super.jieshao() //使用super调用父类得方法 在constructor不能使用super
        }
    }
    var jm = new Jinmao('xiaojin', 18)
    console.log(Jinmao.color)
    console.log(jm)
    // 访问修饰符  也可以不使用constructor写一些静态得变量
    class Encapsulate {
        public str1: string = 'name'
        protected str2: string = 'age'
        private str3: string = 'like'
        constructor() {
            console.log(this.str3)
        }
    }
    var obj1 = new Encapsulate()
    console.log(obj1)
    console.log(obj1.str1)
    // console.log(obj1.str2) // 受保护得也只能在自身子类或者父类访问
    // console.log(obj1.str3) // 因为str3是私有得所以访问不到 只有自身能访问
    // 类和接口一起使用
    interface ILoan {
        interest: number
    }
    class AgriLoan implements ILoan {
        interest: number //因为继承了接口，接口中定义了interest不能改变
        
        constructor(interest: number) {
            this.interest = interest
        }
    }
    var obj2 = new AgriLoan(11)
    console.log(obj2.interest)
}