/*
* @Author: Y.Chen
* @Date:   2018-10-19 19:24:41
* @Last Modified by:   Y.Chen
* @Last Modified time: 2018-10-19 20:50:41
*/
 {
 	// ES5写法 
 	let regex = new RegExp('xyz','i');
 	let regex2 = new RegExp(/xyz/i);
 	console.log(regex.test('xyz123'),regex2.test('xyz123'));
 	// ES6写法 i 会覆盖 ig
 	let regex3 = new RegExp(/xyz/ig,'i');
 	// ES6新增flag方法，输出修饰符
 	console.log(regex3.flags)
 }

 {
 	// y修饰符
 	let s='bbb-bb-b';
 	let a1 = /b+/g;//全局匹配 g修饰符从上次匹配的位置继续寻找 直到找到合适的
 	let a2 = /b+/y;//粘连模式，全局匹配 y修饰符必须是从bbb后的一个字符开始匹配，如果不满足则匹配失败
 	console.log('one',a1.exec(s),a2.exec(s));
 	console.log('two',a1.exec(s),a2.exec(s));
 	// 判断是否开启y
 	console.log(a1.sticky,a2.sticky);
 }

 {
 	// u unicode修饰符
 	// 不加u test里面是两个字符，能够匹配到\uD83D
 	console.log('u-1', /^\uD83D/.test('\uD83D\uDC2A'));//true
 	// 加u test里面是一个字符，不能够匹配到\uD83D
 	console.log('u-2', /^\uD83D/u.test('\uD83D\uDC2A'));//false
 	// {}里面放的是unicode编码的话，一定要加u修饰符
 	console.log(/\u{61}/.test('a'));//false
 	console.log(/\u{61}/u.test('a'));//true

 	console.log(`\u{20BB7}`);//𠮷
 	let s='𠮷';
 	// 字符大于两个字节，要加u进行处理，否则无法识别
 	console.log('u-1',/^.$/.test(s));//false
 	console.log('u-2',/^.$/u.test(s));//true

 	console.log('test1',/𠮷{2}/.test('𠮷𠮷'));//false
 	console.log('test2',/𠮷{2}/u.test('𠮷𠮷'));//true

 }

 