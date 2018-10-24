/*
 * @Author: Y.Chen
 * @Date:   2018-10-24 20:19:07
 * @Last Modified by:   Y.Chen
 * @Last Modified time: 2018-10-24 22:06:08
 */
{
    console.log(0b111110111); //二进制503
    console.log(0o767); //八进制503
} {
    //Number.isFinite 判断这个值是否是有穷的
    console.log('15', Number.isFinite(15)); //true
    console.log('NaN', Number.isFinite(NaN)); //false
    console.log('1/0', Number.isFinite('true' / 0)); //false
    //判断是否是数字
    console.log('NaN', Number.isNaN(NaN)); //true
    console.log('NaN', Number.isNaN(0)); //false

} {
    // 判断是否是整数,
    console.log('25', Number.isInteger(25)); //true
    console.log('25.0', Number.isInteger(25.0)); //true
    console.log('25.1', Number.isInteger(25.1)); //false
    // 函数接受的参数必须是数
    console.log('25', Number.isInteger('25')); //false
} {
    console.log(Number.MAX_SAFE_INTEGER); //表示数的最大上限
    console.log(Number.MIN_SAFE_INTEGER); //表示数的最小下限
    console.log('10', Number.isSafeInteger(10)) //true  表示10在规定范围内
} {
    // 取整数部分,
    console.log(4.1, Math.trunc(4.1)); //4
    console.log(4.9, Math.trunc(4.9)); //4
} {
    // 判断数是正数 负数 还是0,负数返回-1 正数返回1 0返回0
    console.log(-5, Math.sign(-5)); //-1
    console.log(0, Math.sign(0)); //0
    console.log(5, Math.sign(5)); //1
    console.log('50', Math.sign('50')); //1 如果是字符串，会强制类型转换
    console.log('-50', Math.sign('-50')); //-1 如果是字符串，会强制类型转换
    console.log('foo', Math.sign('foo')); //NaN 如果不是数字字符串，返回NaN

}{
	// 立方根
	console.log('-1',Math.cbrt(-1));//-1
	console.log('8',Math.cbrt(8));//2
}