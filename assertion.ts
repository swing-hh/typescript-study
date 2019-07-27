function getLength(arg: number | string): number {
    if (<string>arg) { // 这样可以断言arg为string类型
        return (<string>arg).length
    } else {
        return arg.toString().length
    }
}
function getLengt1(arg: number | string): number {
    if (arg as string) { // 这样也可以断言为string类型
        return (<string>arg).length
    } else {
        return (<number>arg).toString().length
    }
}