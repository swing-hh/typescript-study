{
    // 其实跟js是一样的
    var str = new String('string')
    // 对象的属性 constructor是 prototype是字符串方法的原型链
    console.log(str.length) //长度

    // String的方法
    console.log(str.charAt(0)) // 返回指定位置的字符
    console.log(str.charCodeAt(0)) // 返回指定位置的unicode编码
    console.log(str.concat('Number')) //连接字符串
    console.log(str.indexOf('t')) //返回字符串首次出现的位置
    console.log(str.lastIndexOf('h')) // 返回字符串出现的位置 从后向前查找
    console.log(str.localeCompare('myString')) // 用本地特定顺序来比较两个字符串
    console.log(str.match(/str/g)) // 用正则表达式匹配 
    console.log(str.replace(/str/, 'STR')) //用正则表达式替换字符串
    console.log(str.search(/str/)) // 用正则表达式查找匹配的值
    console.log(str.slice(1, 3)) // 根据位置提取字符串片段
    console.log(str.split('')) // 把字符串分割成字符串数组
    console.log(str.substr(1, 3)) // 根据索引和字符串的长度返回字符串片段
    console.log(str.substring(1, 3)) //根据两个位置返回字符串片段
    console.log(str.toLocaleLowerCase()) //字符串转换成小写 只有几种语言
    console.log(str.toLocaleUpperCase()) // 字符串转换成打斜
    console.log(str.toLowerCase()) // 转换成小写
    console.log(str.toString()) // 转换成字符串
    console.log(str.toUpperCase()) //转换成大写
    console.log(str.valueOf()) //返回原始方法
  }