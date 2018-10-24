/*
 * @Author: Y.Chen
 * @Date:   2018-10-24 10:59:39
 * @Last Modified by:   Y.Chen
 * @Last Modified time: 2018-10-24 19:52:03
 */
{
    console.log('a', '\u0061');
    console.log('s', '\u20bb7'); //\u20bb7 超过了0xFFFF。把\u20bb7分成了两个字符，20bb是一个，7是一个
    // 大于两个字节 使用u方法
    console.log('s2', '\u{20bb7}'); //𠮷


}

{
    // codePointAt API
    let s = '𠮷';
    // ES5方法
    console.log('length', s.length);
    console.log('0', s.charAt(0));
    console.log('1', s.charAt(1));
    // 输出第一个字节的10进制编码
    console.log('at0', s.charCodeAt(0));
    // 输出第二个字节的10进制编码
    console.log('at1', s.charCodeAt(1));
    // ES6方法
    let s1 = '𠮷a';
    console.log('length', s1.length);//3
    // 𠮷占了两个字节，code0输出𠮷的十进制
    console.log('code0', s1.codePointAt(0));
    console.log('code0', s1.codePointAt(0).toString(16));
    // code1 输出 𠮷 中第二个字节的十进制编码，相当于at1
    console.log('code1', s1.codePointAt(1));
    // code2 输出a的十进制编码
    console.log('code2', s1.codePointAt(2));
}
{
	// ES5方法 输出乱码
	console.log(String.fromCharCode("0x20bb7"));
	// ES6方法 输出 𠮷
	console.log(String.fromCodePoint("0x20bb7"));
}

{
	let str='\u{20bb7}abc';
	for(let i=0;i<str.length;i++){
		console.log('es5',str[i]);
	}
	for(let code of str){
		console.log('es6',code);//𠮷 a b c
	}
}
{
	//判断字符串中是否包含某些字符
	let str = "string";
	console.log('includes',str.includes("r"));//true
	// 判断字符串是否是以str为开头的
	console.log('start',str.startsWith('str'));//true
		// 判断字符串是否是以ng为结束的
	console.log('end',str.endsWith('ng'));//true
}
{
	let str = "abc";
	// 重复2次
	console.log(str.repeat(2));
}
{
	//模板字符串
	let name = "list";
	let info = "hello world";
	let m = `I am ${name},${info}`;
	console.log(m);
}

{
	console.log('1'.padStart(2,'0'));//补白，不够2位 前面补0
	console.log('1'.padEnd(2,'0'));//补白，不够2位 后面补0
}
{
	//标签模版
	//怎么用？
	//在哪用？1 防止XSS攻击 2.处理多语言转换
	let user = {
		name:'list',
		info:'hello word'
	};
	console.log(abc`I am ${user.name},${user.info}`);
	function abc(s,v1,v2){
		console.log(s,v1,v2);
		return s+v1+v2;
	}
}
{
	// 对所有的\进行转义，使得\n不起作用
	console.log(String.raw`Hi\n${1+2}`);
	console.log(`Hi\n${1+2}`);
}
