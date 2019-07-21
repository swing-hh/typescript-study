{
    // 使用构造函数
    var numVal = new Number(1)
    console.log(numVal)
    console.log("最大值为: " + Number.MAX_VALUE);
    console.log("最小值为: " + Number.MIN_VALUE);
    console.log("负无穷大: " + Number.NEGATIVE_INFINITY);
    console.log("正无穷大:" + Number.POSITIVE_INFINITY);
    console.log("NaN不是数字" + Number.NaN)
    // 函数prototype 可以挂载在函数上，实现的实例上可以得到
    // Number对象的方法
    var num2 = 111.111
    console.log(num2.toExponential()) // 转换为指数计数法
    console.log(num2.toFixed(2)) // 制定小数位数
    console.log(num2.toLocaleString()) // 数字转化位字符串
    console.log(num2.toPrecision(2)) // 数字格式化指定长度
    console.log(num2.toString()) // 数字转化为字符串
    console .log(num2.valueOf()) // 返回number的原始数值
}