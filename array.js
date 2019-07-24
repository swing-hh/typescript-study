{
    var arr3 = ['str1', 'str2'];
    console.log(arr3[0]); // 数组考下标索引获得对应的值
    for (var i = 0; i < arr3.length; i++) {
        console.log(arr3[i]);
    }
    // 数组解构
    var a1 = arr3[0], b1 = arr3[1];
    // 数组迭代 比for循环省一点代码
    for (var item in arr3) {
        console.log(arr3[item]);
    }
    // 多维数组其实就是数组里面嵌套数组
    var arr4 = [
        [1, 3],
        [2, 4]
    ];
    console.log(arr4[0][0]);
    // 使用构造函数的方式创建
    var arr5 = new Array(1, 2, 3);
    arr5.forEach(function (item) {
        console.log(arr5[item]);
    });
    // 数组的方法
    var arr6 = [1, 2, 3, 4, 5];
    console.log(arr6.concat([1])); // 拼接数组
    console.log(arr6.every(function (item, index, arr) {
        return item <= 3;
    }));
}
