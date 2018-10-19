/*
* @Author: Y.Chen
* @Date:   2018-10-19 16:05:51
* @Last Modified by:   Y.Chen
* @Last Modified time: 2018-10-19 17:12:20
*/
/**
 * 1、数组解构赋值
 */
{
	// 数组类型解构赋值
	let a,b,rest;
	[a,b]=[1,2];
	console.log(a,b);//1 2
}
{
	// 数组类型解构赋值
	let a,b,rest;
	[a,b,...rest]=[1,2,3,4,5,6];
	console.log(a,b,rest);
}
{
	// 对象解构赋值
	let a,b;
	({a,b}={a:1,b:2})
	console.log(a,b);
}
{
	// 解构赋值没有成功配对，则输出undefined
	let a,b,c,rest;
	[a,b,c=3]=[1,2];//这里设置默认值
	console.log(a,b,c);//1 2 3
}
// 场景1: 解构赋值实现变量交换
{
	let a  =1;
	let b=2;
	[a,b]=[b,a];
	console.log(a,b);
}
// 场景2: 处理函数多个返回值
{
	function f(){
		return [1,2]
	}
	let a,b;
	[a,b]=f();
	console.log(a,b);
}
// 场景3: 函数返回多个值时，有选择性地接受多个变量
{
	function f(){
		return [1,2,3,4,5]
	}
	let a,b,c;
	[a,,,b]=f();
	console.log(a,b);//1 4
}
// 场景3: 函数返回未知长度值时，选择第一个值，其他放入数组中
{
	function f(){
		return [1,2,3,4,5]
	}
	let a,b,c;
	[a,...b]=f();
	console.log(a,b);//1，[2,3,4,5]
}
/**
 * 2、对象解构赋值
 */
{
	let o={p:42,q:true};
	let {p,q}=o;
	console.log(p,q);//42 true
}
{
	let {a=10,b=5}={a:3};
	console.log(a,b);//3 5
}
// 场景1: 获取对象属性
{
	let metaData={
		title:'abc',
		test:[{
			title:'test',
			desc:'description'
		}]
	};
	let {title:esTitle,test:[{title:cnTitle}]}=metaData;
	console.log(esTitle,cnTitle);
}