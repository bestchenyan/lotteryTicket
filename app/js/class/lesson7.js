/*
* @Author: Y.Chen
* @Date:   2018-10-25 14:32:13
* @Last Modified by:   Y.Chen
* @Last Modified time: 2018-10-26 11:27:53
*/
{
	// 传递默认值
	// 注意：默认值后只能跟带默认值的参数
	function test(x,y='world'){
		console.log('默认值',x,y);
	}
	test('hello');
	test('hello','kill');
}{
	let x='test';
	function test2(x,y=x){
		console.log('作用域',x,y);
	}
	test2('kill');//kill kill
}{
	// rest参数
	// 在你不确定具体参数时，把一系列参数转换成数组
	// rest参数之后不能再跟其他参数
	function test3(...arg){
		for(let v of arg){
			console.log('rest',v);
		}
	}
	test3(1,2,3,4,'a');
}{
	//扩展运算符
	//把数组转换成离散值
	console.log(...[1,2,4]);
}{
	// 箭头函数
	/**
	 * 箭头函数：arrow 函数名
	 * v 函数参数
	 * v*2 函数返回值
	 */
	let arrow = v => v*2;
	let arrow2 = () => 5;//没有参数，把v换成()
	console.log('arrow',arrow(3));
	console.log('arrow2',arrow2());
}{
	// 尾调用
	// 函数的最后一句叫做尾调用
	function tail(x){
		console.log('tail',x);
	}
	function fx(x){
		return tail(x);
	}
	fx(123);
}