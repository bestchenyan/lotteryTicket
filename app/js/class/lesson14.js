/*
 * @Author: Y.Chen
 * @Date:   2018-11-05 15:46:40
 * @Last Modified by:   Y.Chen
 * @Last Modified time: 2018-11-05 16:27:13
 */
{
    let arr = ['hello', 'world'];
    //arr[Symbol.iterator]() 是一个函数，返回值有一个next方法
    let map = arr[Symbol.iterator]();
    console.log(map.next());
    console.log(map.next());
    console.log(map.next());

} {
    //自定义iterator接口
    let obj = {
        start: [1, 3, 2],
        end: [7, 9, 8],
        [Symbol.iterator]() {
            let self = this;
            let index = 0;
            let arr = self.start.concat(self.end);
            let len = arr.length;
            return {
                // 自定义next方法
                next() {
                    if (index < len) {
                        return {
                            value: arr[index++],
                            done: false //表示没有结束
                        }
                    } else {
                        return {
                            value: arr[index++],
                            done: true
                        }
                    }
                }
            }
        }
    }
    for (let key of obj) {
        console.log(key)
    }
} {
    // for of 背后用的是iterator接口
    let arr = ['hello', 'world'];
    for(let value of arr){
    	console.log('value',value)
    }
}