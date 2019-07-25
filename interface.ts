{
    // 接口是一系列抽象方法的声明，一些方法特性的集合，这些方法都是抽象的，需要类去实现，然后第三方通过这组抽象方法调用
    interface interface_name {

    }
    // 写了一个接口类型
    interface Iperson {
        firstName: string,
        lastName: string,
        sayHi: () => string
    }
    // 变量使用接口类型定义自己，所以接口中得声明类型必须有
    var customer: Iperson = {
        firstName: 'yaobai',
        lastName: 'chunjing',
        // age: 1, // 不允许定义类型之外得东西
        sayHi: (): string => {
            return 'hello'
        }
    }
    console.log(customer.firstName)
    console.log(customer.lastName)
    console.log(customer.sayHi())
    // 联合类型 联合类型顾名思义就是多个类型
    interface RunOptions {
        comandline: string[] | string | (() => string)
    }
    var run: RunOptions = {
        comandline: '1111'
    }
    run.comandline = ['1', '2']
    run.comandline = ()=>{
        return 'str'
    }
    // 接口和数组
    interface nameList {
        [index: number]: string
    }
    var list:nameList = ['str1', 'str2'] // 如果出现数字2报错
    list[2] = 'str3'
    list[3] = 'str4'
    console.log(list)

    interface nameList1 {
        // index得类型 ：值得类型
        [index: string]: number
    }    
    var list1: nameList1
    // list1['str1'] = 1 // 能声明，但是运行会报错，因为找不到str1
    // list1['str2'] = 3
    console.log(list1)

    // 接口继承 使用extends关键字 继承Iperson里面得属性类型 会覆盖 多继承就是再extends后写多个继承对象
    interface RunOptions1 extends Iperson {
        love: string
    }
    var person: RunOptions1 = {
        love: 'chunjing',
        firstName: 'ba',
        lastName: 'ma',
        sayHi: () => {
            return 'wo'
        }
    }
 }