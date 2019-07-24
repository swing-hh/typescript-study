{
    // 联合类型的意思就是允许出现多种类型的情况
    var val: string | number
    val = 1
    val = '1'
    function disp(name: string | number): any {
        return name
    }
    disp('yaobai')
    disp(121)
    // 联合数组类型
    let arr: number[] | string[]
    arr = [1, 2, 3, 4]
    console.log(arr)
    arr = ['1', '2', '3']
    console.log(arr)
}