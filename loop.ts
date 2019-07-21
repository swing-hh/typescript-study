{
    for (let i = 0; i < 3; i++) {
        console.log(i)
    }
    // for in的n必须是any，否是会报错 还能够遍历对象
    var n:any = "a b c" 
    for(var i in n) {
        console.log(n[i])  
    }
    // for of 为什么使用let声明就是好的，使用var则是错误 *
    var arr = [1, 2, 'str']
    for(let i of arr){
        console.log(i)
    }
    var obj = {
        name: 'yaobai',
        age: 18
    }
    for(let key in obj){
        console.log(obj[key])
    }
    // forEach 不能使用break continue return 等语句
    arr.forEach((value, index, arr) => {
        console.log(value, index, arr)
    })
    // every 如果没有return true则直接本次循环结束
    console.log('//////every')
    arr.every((val, ind, arr)=>{
        console.log(val, ind, arr)
        return true
    })
    // while 
    var b:number = 10
    var c: number = 1
    while(c<b){
        c++;
        console.log(c)
    }
    // do thile 先执行一下，然后在判断条件
    var d = 10
    do{
        d++
        console.log(d)
    }while(d< b)
    // break跳出循环 continue跳出本地循环
    // 无限循环
    // for(;;){
    //     console.log('111') // 两个无限循环都会执行
    // }
    // while(true){
    //     console.log('会循环吗？')
    // }
}