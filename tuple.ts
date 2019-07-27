{
    // 元组我理解为带有不同类型的数组
    var myTuple = [10, 'str']
    console.log(myTuple[0]) // 元组也是靠下标来访问值
    // 操作它就跟操作数组的方法是一样的，只不过它的类型是多种的
    var myTuple1: [string, number] = ['str1', 5];  // 初始化可以不设置,则为[undefined,undefined],因为undefined和null属于其他类型的子类型
    myTuple1.push('str2')
    myTuple.push('str3')
    myTuple1.push(1)
    console.log(myTuple1)
    // myTuple1.push(false) // 报错，不能为boolean类型
}