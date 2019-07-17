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
console.log(getMin([1, 3, 5, 3, 4, 2, 0])); // 这种不传类型是因为又默认类型
console.log(getMin(['str4', 'str2', 'str1', 'str3']));

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

// 例3、泛型函数接口 接口得U和T可以不一致，但是他们代表得确实同一种类型
interface ConfigFn {
    <U>(value: U): U;
}
var getData: ConfigFn = function <T>(value: T): T {
    return value;
}
console.log(getData<string>('张三'));
console.log(getData<number>(1212));
// console.log(getData<number>("1212"));


//4 泛型类接口 下边我有点没太懂

// 类似  Map<String,Object> Param  接口
interface Param {
    [index: string]: any
}

/**
 * page分页对象
 */
class Page {
    private currentPage: number = 1; //当前页码 默认1
    private pageSize: number = 10;//每页条数 默认为10
    private sortName: string; //排序字段
    private sortOrder: string = "asc"; // 排序规则 asc | desc 默认为asc正序


    constructor(param: Param) {
        if (param["currentPage"]) {
            this.currentPage = param["currentPage"];
        }
        if (param["pageSize"]) {
            this.pageSize = param["pageSize"];
        }
        if (param["sortName"]) {
            this.sortName = param["sortName"];
        }
        if (param["sortOrder"]) {
            this.sortOrder = param["sortOrder"];
        }
    }

    public getStartNum(): number {
        return (this.currentPage - 1) * this.pageSize;
    }
}


class User {
    id: number;//id主键自增
    name: string;//姓名
    sex: number;//性别 1男 2女
    age: number;//年龄
    city: string;//城市
    describe: string;//描述
}

//泛型接口
interface BaseDao<T> {
    findById(id: number): T;//根据主键id查询一个实体
    findPageList(param: Param, page: Page): T[];//查询分页列表
    findPageCount(param: Param): number;//查询分页count
    save(o: T): void;//保存一个实体
    update(o: T): void;//更新一个实体
    deleteById(id: number);//删除一个实体
}

/**
 * 接口实现类
 */
class UserDao<User> implements BaseDao<User>{
    findById(id: number): User {
        return null;
    }
    findPageList(param: Param, page: Page): User[] {
        return [];
    }
    findPageCount(param: Param): number {
        return 0;
    }
    save(o: User): void {

    }
    update(o: User): void {

    }
    deleteById(id: number) {

    }
}
