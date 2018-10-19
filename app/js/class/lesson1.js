/*
* @Author: Y.Chen
* @Date:   2018-10-16 09:10:17
* @Last Modified by:   Y.Chen
* @Last Modified time: 2018-10-19 16:05:35
*/
/** var let const的区别:
	1、let const 会产生一个块作用域
	2、let声明的变量不能被重复声明
	3、const声明的常量是不能修改的，且声明时必须赋值
*/
function test(){
/*
	1、let const 会产生一个块作用域
	for(let i=1;i<3;i++){
		//这里是个块作用域，i只在这里生效
		console.log(i)
	}
	// 严格模式变量未声明，不能引用，会报错
	console.log(i);
 */

/*
2、let声明的变量不能被重复声明
let a = 1;
let a = 1;

 */

/*
3、const声明的常量是不能修改的，且声明时必须赋值
	const PI = 3.1415926;
	PI = 8;
	const a ;
	a = 4;
 */
/*
4、使用const定义一个对象，可以给对象新增属性
	const k={
		a:1
	}
	k.b = 3;
	console.log(k);//这里输出的k中含有b:3;
	因为 对象是引用类型，此时存在k里的是对象的引用（地址）。 

 */
}
test();