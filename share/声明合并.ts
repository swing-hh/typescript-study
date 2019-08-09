// 函数重载 只能重载类型类型包含的,否则会编译报错
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string { // 去掉string类型报错，因为保佑包含重载得类型
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}

// 接口合并 属性会合并到一起
interface Alarm {
    price: number;
}
interface Alarm {
    weight: number;
}

// 类型不一致报错
interface Alarm1 {
    price: number;
}
interface Alarm1 {
    price: string;  // 类型不一致，会报错
    weight: number;
}