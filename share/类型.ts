// 可以使用类型别名为类型起一个新名字
type Name = string;
function getString(name: string): Name {
    return name;
}
// 字符串字面量类型
type EventNames = 'click' | 'scroll';
function handlerEvent(elw: Element, event: EventNames) {

}
handlerEvent(document.getElementById('hello'), 'click');
handlerEvent(document.getElementById('hello'), 'dbClick'); // 报错,因为定义类兴中没有dbClick