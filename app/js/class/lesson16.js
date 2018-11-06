/*
* @Author: Y.Chen
* @Date:   2018-11-05 22:13:02
* @Last Modified by:   Y.Chen
* @Last Modified time: 2018-11-06 11:27:44
*/
{
	let readonly = function(target, property, descriptor){
		descriptor.writable = false;
		return descriptor
	};

	class Test{
		//加了修饰器  修改类的行为
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
}{
	let typename = function(target,property,descriptor){
		target.myname = 'hello';
	}
	@typename
	class Test{

	}

	console.log('类修饰符',Test.myname);
	//第三方库修饰器的js库：core-decorators;
	
}{
	//日志系统
	let log=(type) =>{
		return function(target,property,descriptor){
			let src_method = descriptor.value;
			descriptor.value = (...arg)=>{
				src_method.apply(target.arg);
				console.info(`log ${type}`);
			}
		}
	}
	class AD{
		@log('show')
		show(){
			console.info('ad is show');
		}
		@log('click')
		click(){
			console.info('ad is click');
		}
	}
	let ad = new AD();
	ad.show();
	ad.click();
}