/*
* @Author: Y.Chen
* @Date:   2018-11-06 14:43:18
* @Last Modified by:   Y.Chen
* @Last Modified time: 2018-11-06 14:55:01
*/
// export let a = 123;

// export function test(){
// 	console.log('test');
// }

// export class Hello{
// 	test(){
// 		console.log('class');
// 	}
// }
let a = 123;
let test = function(){
	console.log('test');
}
class Hello{
	rest(){
		console.log('class');
	}
}
// 不给变量命名
export default{
	a,
	test,
	Hello
}