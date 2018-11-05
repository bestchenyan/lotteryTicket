/*
 * @Author: Y.Chen
 * @Date:   2018-11-01 16:52:25
 * @Last Modified by:   Y.Chen
 * @Last Modified time: 2018-11-02 15:41:40
 */
{
    //类的基本定义和生成实例
    class Parent {
        constructor(name = 'Y.Chen') {
            this.name = name;
        }
    }
    let v_parent = new Parent('v');
    console.log('构造函数和实例', v_parent);
}

{
    //继承
    class Parent {
        constructor(name = 'Y.Chen') {
            this.name = name;
        }
    }
    class Child extends Parent {
        constructor(name = 'child') {
            //参数列表就是父类的参数列表
            super(name);
            this.type = 'child'; //一定要放在super之后
        }
    }

    console.log('继承传递参数', new Child('hello'));
} {
    //getter setter
    class Parent {
        constructor(name = 'Y.Chen') {
            this.name = name;
        }

        // 这里是属性
        get longName() {
            return 'cy' + this.name
        }

        set longName(value) {
            this.name = value;
        }
    }
    let v = new Parent();
    console.log('getter', v.longName);
    //赋值就是setter操作
    v.longName = 'hello';
    console.log('setter', v.longName);
} {
    //静态方法
    class Parent {
        constructor(name = 'Y.Chen') {
            this.name = name;
        }
        // 静态方法通过类调用 而不是通过类的实例调用
        static tell() {
            console.log('tell');
        }
    }
    Parent.tell();
} {
    //静态属性
    class Parent {
        constructor(name = 'Y.Chen') {
            this.name = name;
        }
        // 静态方法通过类调用 而不是通过类的实例调用
        static tell() {
            console.log('tell');
        }
    }
    Parent.type = 'test';
    console.log('静态属性', Parent.type);
}