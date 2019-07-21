{
    // 条件语句和js的基本一致
    var a = 10;
    if (a > 50) {
        console.log('大于50')
    } else if (a > 40) {
        console.log('大于40')
    } else {
        console.log('没有条件选中')
    }
    switch(a) {
        case 20: 
            console.log('等于20')
            break;
        case 15: 
            console.log('等于15')
            break;
        default:
            console.log('没有条件选中')
            break;
    }
}