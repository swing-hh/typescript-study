// 命名空间的明确问题就是解决重名问题
namespace Drawing {
    export interface IShape {

    }
    export class Some {
        name: string
        static color: string = 'red'
        constructor(name) {
            this.name = name
        }
    }
}

// 嵌套命名空间
namespace namespace_name1 {
    export namespace namespace_name2 {
        export class Dog {

        }
    }
}