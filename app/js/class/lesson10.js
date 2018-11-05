/*
 * @Author: Y.Chen
 * @Date:   2018-10-29 20:16:45
 * @Last Modified by:   Y.Chen
 * @Last Modified time: 2018-11-01 15:24:21
 */
{
    let list = new Set();
    list.add(5);
    list.add(7);
    // 数组的长度用length Set的长度用size
    console.log('size', list.size);
} {
    let arr = [1, 2, 3, 4, 5];
    let list = new Set(arr);
    console.log('size', list.size)
} {
    let list = new Set();
    list.add(1);
    list.add(2);
    list.add(1); //set中值不能重复，如果重复会忽略 不会报错
    list.add(3);
    console.log('list', list);
    //用处：数组去重,去重时不会做数据类型转换
    let arr = [1, 2, 3, 1, 3, 4, 2];
    let list2 = new Set(arr);
    console.log('unique', list2);
} {
    // set 方法
    let arr = ['add', 'delete', 'clear', 'has'];
    let list = new Set(arr);

    console.log('has', list.has('add'));
    console.log('delete', list.delete('add'), list);
    list.clear();
    console.log('list', list);
} {
    //set 实例遍历
    let arr = ['add', 'delete', 'clear', 'has'];
    let list = new Set(arr);
    // keys values 返回的都是set值
    for (let key of list.keys()) {
        console.log('keys', key);
    }
    // values()可以省略，直接写成list
    for (let value of list.values()) {
        console.log('values', value);
    }
    for (let [key, value] of list.entries()) {
        console.log('entries', key, value);
    }

    list.forEach(function(item) {
        console.log(item);
    })
}

{
    // weakSet
    // 支持数据类型不同，weakSet元素只能是对象
    // 往weakset添加的对象  只是添加了地址的引用，而且也不会检测该地址是否被垃圾回收掉
    // 没有clear方法，没有size属性  不能遍历
    let weakList = new WeakSet();
    let arg = {};
    weakList.add(arg);
    console.log('weakList', weakList);
} {
    //map
    let map = new Map();
    let arr = ['123'];
    //map 添加元素用set(key,value)
    //map 中key可以是任何数据类型，所以可以用数组作为key
    map.set(arr, 456);
    //用get获取key值
    console.log('map', map, map.get(arr))
} {
    // 第二种定义的格式
    let map = new Map([
        ['a', 123],
        ['b', 456],
        ['c', 798]
    ]);
    console.log('map', map);
    console.log('size', map.size); //长度
    console.log('delete', map.delete('a'), map); //删除
    console.log('clear', map.clear(), map); //清空
    // map的遍历与set 用法相同 keys  values entries
} {
    //weakmap
    //接受的key值必须是对象
    //也没有size属性  没有clear 不能遍历
    //
    let weakMap = new WeakMap();

    let o = {};
    weakMap.set(o, 123);
    console.log(weakMap.get(o));
} {
    // Map 与 Array 横向对比 增 删 查 改
    let map = new Map();
    let array = [];
    //增
    map.set('t', 1);
    array.push({ t: 1 });
    console.info('map-array', map, array);
    //查
    let map_exist = map.has('t');
    let array_exist = array.find(item => item.t); //返回true
    console.info('map-array', map_exist, array_exist); //返回值
    //改
    map.set('t', 2);
    array.forEach(item => item.t ? item.t = 2 : '');
    console.info('map-array-modify', map, array);

    //删除
    map.delete('t');
    let index = array.findIndex(item => item.t);
    array.splice(index, 1);
    console.info('map-array-delete', map, array);
} {
    // set 和 array 对比
    let set = new Set();
    let array = [];

    //增
    set.add({ t: 1 });
    array.push({ t: 1 });
    console.info('set-array', set, array);

    //查
    let set_exist = set.has({ t: 1 }); //false 要吧{t:1}保存成一个变量，查变量的这个地址才返回true
    let array_exist = array.find(item => item.t);
    console.info('set-array', set_exist, array_exist); //返回值

    //改
    set.forEach(item => item.t ? item.t = 2 : '');
    array.forEach(item => item.t ? item.t = 2 : '');
    console.info('set-array-modify', set, array);
    //删除
    set.forEach(item => item.t ? set.delete(item) : '');
    let index = array.findIndex(item => item.t);
    array.splice(index, 1);
    console.info('set-array-delete', set, array);
} {
    // map set object 同时对比
    let item = { t: 1 };
    let map = new Map();
    let set = new Set();
    let obj = {};
    //增
    map.set('t', 1);
    set.add(item);
    obj['t'] = 1;
    console.info('map-set-obj', map, set, obj);
    //查
    console.info({
        map_exist: map.has('t'),
        set_exist: set.has(item),
        obj_exist: 't' in obj
    });
    //改
    map.set('t', 2);
    item.t = 2;
    obj['t'] = 2;
    console.info('map-set-obj-modify', map, set, obj);
    //删除
    map.delete('t');
    set.delete(item);
    delete obj['t'];
    console.info('map-set-obj-delete', map, set, obj);
    /**
     * 能使用map 不使用数组
     * 要求存储唯一性考虑使用set
     * 放弃使用array 和 obj
     */
}