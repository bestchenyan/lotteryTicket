/*
 * @Author: Y.Chen
 * @Date:   2018-10-25 11:10:04
 * @Last Modified by:   Y.Chen
 * @Last Modified time: 2018-10-25 11:58:55
 */
{
    let arr = Array.of(3, 4, 7, 9, 11);
    console.log('arr=', arr); //数组[3,4,7,9,11]
    let arr1 = Array.of();
    console.log('empty=', arr1); //空数组
} {
    let p = document.querySelectorAll('p');
    // Array.from把集合p转义成数组
    let pArr = Array.from(p);
    pArr.forEach(function(item) {
        console.log(item.textContent);
    });
    //生成数组时，又遍历了数组并执行了函数方法
    console.log(Array.from([1, 3, 5], function(item) {
        return item * 2;
    }));
} {
    console.log('fill-7', [1, 'a', undefined].fill(7));
    console.log('fill,pos', ['a', 'b', 'c'].fill(7, 1, 3)); //从数组的第1位开始到第3位结束全部填充7
} {
    for (let index of ['1', 'c', 'ks'].keys()) {
        console.log('keys', index); //返回数组下标
    }
    for (let value of ['1', 'c', 'ks'].values()) {
        console.log('values', value); //返回数组值
    }
    for (let [index,value] of ['1', 'c', 'ks'].entries()) {
        console.log('entries', index,value); //返回数组值
    }
}{
	// 要替换的位置是从0开始，从位置3开始读，到位置4之前结束
	console.log([1,2,3,4,5].copyWithin(0,3,4));
}{
	// 查找
	//find 只找出第一个满足条件的值
	console.log([1,2,3,4,5,6].find(function(item){
		return item>3;
	}))
	//findIndex 只找出第一个满足条件的值的下标
	console.log([1,2,3,4,5,6].findIndex(function(item){
		return item>3;
	}))
}{
	// 判断数组中是否包含某个值
	console.log('number',[1,2,NaN].includes(1));
	console.log('NaN',[1,2,NaN].includes(NaN));
}