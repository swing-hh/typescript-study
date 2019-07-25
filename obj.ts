{
    // 对象和js中得对象是一样得 键：值（基本类型和对象类型）
    var objName = {
        key1: 'name',
        key2: 'age',
        key3: () => {

        },
        hello: null
    }
    objName.hello = function () { // 如果对象上不出现hello属性  重写得时候就会报错
        console.log('hello')
    }
    // 鸭子类型 通过一些属性去辨别这个是鸭子，参数返回值通过验证接口类型，证明自己是一只鸭子才允许编译
    interface Duck {
        name: string,
        age: number
    }
    function xiaoya(p1: Duck, p2: Duck): Duck {
        var name = p1.name + p2.name
        var age = p1.age + p2.age
        return {
            name,
            age
        }
    }
    console.log(xiaoya({ name: 'chunjing', age: 10 }, { name: 'yaobai', age: 15 }))
}