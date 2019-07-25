{
    var arr3: string[] = ['str1', 'str2']
    console.log(arr3[0])     // 数组考下标索引获得对应的值
    for (let i = 0; i < arr3.length; i++) {
        console.log(arr3[i])
    }
    // 数组解构
    var [a1, b1] = arr3
    // 数组迭代 比for循环省一点代码
    for (let item in arr3) {
        console.log(arr3[item])
    }
    // 多维数组其实就是数组里面嵌套数组
    var arr4 = [
        [1, 3],
        [2, 4]
    ]
    console.log(arr4[0][0])
    // 使用构造函数的方式创建
    var arr5: number[] = new Array(1, 2, 3)
    arr5.forEach(function (item) {
        console.log(arr5[item])
    })

    // 数组的方法
    var arr6: number[] = [1, 2, 3, 4, 5]
    console.log(arr6.concat([1])) // 拼接数组
    console.log(arr6.every(function (item, index, arr) { // 检查每个元素是否符合条件
        return (item <= 8)
    }))
    arr6.filter((el, index, arr) => { // 过滤
        console.log(el)
        console.log(index)
        console.log(arr)
        return el > 3
    })
    arr6.forEach(item => { // 遍历
        console.log(item)
    })
    console.log(arr6.indexOf(6)) // 搜索元素出现得位置
    console.log(arr6.join()) // 数组转换为字符串
    console.log(arr6.lastIndexOf(3)) // 搜索元素出现得位置从后往前 
    console.log(arr6.map(item => { // 按照指定得函数处理每个元素
        return item * 2
    }))
    console.log(arr6.pop()) //删除数组最后一个元素并返回这个元素
    console.log(arr6.push(6)) // 向数组添加一个或多个元素，返回新的长度
    console.log(arr6.reduce((a, b) => { // 将数组元素计算为一个值（从左到右）
        return a + b
    }))
    // reduceRight 从右到左
    console.log(arr6.reverse()) //数组倒序
    console.log(arr6.shift()) // 删除并返回第一个元素
    console.log(arr6.slice(1, 3)) // 根据位置返回数组得一部分
    console.log(arr6.some((el, index, arr) => { // 检测数组中是否有符合指定条件得
        return el > 8
    }))
    console.log(arr6.sort()) // 数组排序
    console.log(arr6.splice(1, 1)) // 根据位置和长度删除或添加数组
    console.log(arr6.toString()) // 把数组转化为字符串
    console.log(arr6.unshift(3)) // 数组前面添加一个元素或多个，并返回新的长度
}