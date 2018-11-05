/*
* @Author: Y.Chen
* @Date:   2018-11-05 22:13:02
* @Last Modified by:   Y.Chen
* @Last Modified time: 2018-11-05 22:38:33
*/
{
	let readonly = function(target, property, descriptor){
		descriptor.writable = false;
		return descriptor
	};

	class Test{
		@readonly
		time(){
			return '2018-03-11'
		}
	}

	let test = new Test();
	test.time = function(){
		console.log('reset time');//更改不会起效果，但不会报错
	};
	console.log(test.time());
}