/*
 * @Author: Y.Chen
 * @Date:   2018-11-01 15:31:07
 * @Last Modified by:   Y.Chen
 * @Last Modified time: 2018-11-01 16:47:04
 */
{
    // 供应商  原始对象
    let obj = {
        time: '2018-11-01',
        name: 'net',
        _r: 123
    };

    // 代理商
    // proxy 作用  有一个类似于供应商的原始对象obj
    // 通过 proxy 新生成一个对象  映射obj  做一些操作
    // 用户是操作 monitor ，然后通过 proxy 传递给 obj
    let monitor = new Proxy(obj, {

        //拦截对象属性的读取
        get(target, key) {
            return target[key].replace('2018', '2019');
        },
        //拦截对象设置属性、
        set(target, key, value) {
            // 只允许修改name
            if (key === 'name') {
                return target[key] = value;
            } else {
                return target[key];
            }
        },
        // 拦截key in object 操作
        has(target, key) {
            if (key === 'name') {
                return target[key];
            } else {
                return false;
            }
        },
        //拦截delete
        deleteProperty(target, key) {
            if (key.indexOf('_') > -1) {
                delete target[key];
                return true;
            } else {
                return target[key];
            }
        },
        //拦截 Object.keys Object.getOwnPropertySymbols,Object.getOwnPropertyName方法
        ownKeys(target) {
            return Object.keys(target).filter(item => item != 'time');
        }
    });
    console.log('get', monitor.time);
    monitor.time = '2018'; //修改不成功
    monitor.name = 'Y.Chen';
    console.log('set', monitor.time, monitor);
    console.log('has', 'name' in monitor, 'time' in monitor); //name 返回true time返回false 被拦截了
    // delete monitor.time; //time并没有被删除
    // console.log('delete', monitor);
    // delete monitor._r;//_r 被删除了
    // console.log('delete', monitor);
    console.log('ownKeys', Object.keys(monitor)); //time 被过滤了
} {
    // 供应商  原始对象
    let obj = {
        time: '2018-11-01',
        name: 'net',
        _r: 123
    };
    //Proxy有的方法 Reflect也有，名称用法都一样，Reflect不需要new一个对象，可以直接用
    console.log('Reflect get', Reflect.get(obj, 'time'));
    console.log('Reflect set', Reflect.set(obj, 'name', 'Y.Chen'), obj);
    console.log('Reflect has', Reflect.has(obj, 'name'));
}

{
	// 数据校验
    function validator(target, validator) {
        return new Proxy(target, {
            _validator: validator,
            set(target, key, value, proxy) {
                if (target.hasOwnProperty(key)) {
                    let va = this._validator[key];
                    if (!!va(value)) {
                        return Reflect.set(target, key, value, proxy);
                    } else {
                        throw Error(`不能设置${key}到 ${value}中`);
                    }
                } else {
                    throw Error(`${key} 不存在`);
                }
            }
        })
    }
    const personValidators = {
        name(val) {
            return typeof val === 'string';
        },
        age(val) {
            return typeof val === 'number' && val > 18;
        }
    }
    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
            return validator(this, personValidators)
        }
    }
    const person = new Person('lilei', 30);
    console.info(person);
    person.name = 'Y.Chen';
    console.info(person);
}