/*
* @Author: Y.Chen
* @Date:   2018-10-29 16:20:57
* @Last Modified by:   Y.Chen
* @Last Modified time: 2018-10-29 17:26:45
*/
{
	// 简介表示法
	let o=1;
	let k=2;
	let es5 = {
		o:o,
		k:k
	};
	let es6 = {
		o,
		k
	};
	console.log(es5,es6);

	let es5_method = {
		hello:function(){
			console.log("hello es5");
		}
	};
	let es6_method = {
		hello(){
			console.log("hello es6");
		}
	};
	console.log(es5_method.hello(),es6_method.hello())
}{
	// 属性表达式
	let a='b';
	let es5_obj={
		a:'c',
		b:'c'
	};
	let es6_obj={
		// 相当于给b赋值，
		[a]:'c'
	};
	console.log(es5_obj,es6_obj);
}
{
	// 新增API
	// is API 判断两个字符串是否相等  功能上与===一样
	console.log('字符串',Object.is('abc','abc'),'abc'==='abc')
	console.log('数组',Object.is([],[]),[]===[])//false false
	//assign API
	//拷贝的属性是有限制的，是浅拷贝
	//只拷贝自身对象属性，不能拷贝来自继承的属性  不能拷贝不可枚举的属性
	console.log('拷贝',Object.assign({a:'a'},{b:'b'}))
	//entries API
	let test = {k:123,o:456};
	for(let [key,value] of Object.entries(test)){
		console.log([key,value]);
	}
}
{
	//扩展运算符
	let {a,b,...c}={a:'test',b:'kill',c:'ddd',d:'ccc'};
	console.log(a,b,c)
}