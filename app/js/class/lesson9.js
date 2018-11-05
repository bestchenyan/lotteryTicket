/*
 * @Author: Y.Chen
 * @Date:   2018-10-29 19:16:46
 * @Last Modified by:   Y.Chen
 * @Last Modified time: 2018-10-29 19:47:11
 */
{
    //声明
    let a1 = Symbol();
    let a2 = Symbol();
    console.log(a1,a2,a1===a2);//false
    //for里面的a3是key值
    let a3 = Symbol.for('a3');
    //再次执行 Symbol.for('a3')时会检查a3是否在全局注册过
    //如果注册过，就返回该值，如果没有注册过则调用Symbol()生成一个独一无二的值
    let a4 = Symbol.for('a3');
    console.log(a3===a4);
}
{
	//作用:f不会造成冲突
	let a1 = Symbol.for('abc');
	let obj = {
		[a1]:'123',
		'abc':345,
		'c':456
	};
	console.log(obj);
	//注意：用symbol作为key值，通过for in  let of 是取不到这个值的
	for(let [key,value] of Object.entries(obj)){
		console.log('let of',key,value);
	};
	//Object.getOwnPropertySymbols API
	Object.getOwnPropertySymbols(obj).forEach(function(item){
		console.log(obj[item]);//取出obj 中symbol作为key值的属性
	});
	//取出所有的key value
	Reflect.ownKeys(obj).forEach(function(item){
		console.log('ownKeys',item,obj[item]);
	})
}