/*
 * @Author: Y.Chen
 * @Date:   2018-11-02 15:46:01
 * @Last Modified by:   Y.Chen
 * @Last Modified time: 2018-11-05 15:35:24
 */
{
    // es5 回调函数实现异步
    let ajax = function(callback) {
        console.log('执行');
        setTimeout(function() {
            callback && callback.call()
        }, 1000);
    };
    ajax(function() {
        console.log('setTimeout1')
    })
} {
    let ajax = function() {
        console.log('执行2');
        //返回一promise个实例
        ////resolve 执行下一步操作
        ///reject 中断当前操作
        return new Promise(function(resolve, reject) {
            setTimeout(function() {
                resolve();
            }, 1000);
        })
    }
    //ajax()运行完返回的是promise实例
    //promise实例拥有then方法
    //then的参数：第一个是下一步 resolve，第二个是reject
    ajax().then(function() {
        console.log('promise', 'timeout2')
    })
} {
    let ajax = function() {
        console.log('执行3');
        return new Promise(function(resolve, reject) {
            setTimeout(function() {
                resolve();
            }, 1000);
        })
    }
    ajax().then(function() {
        return new Promise(function(resolve, reject) {
            setTimeout(function() {
                resolve()
            }, 2000);
        })
    }).then(function() {
        console.log('timeout3')
    })
} {
    let ajax = function(num) {
        console.log('执行4');
        return new Promise(function(resolve, reject) {
            if (num > 5) {
                resolve();
            } else {
                throw new Error('出错了');
            }
        })
    };
    ajax(6).then(function() {
        console.log('log', 6);
    }).catch(function(err) {
        console.log('catch', err)
    });
    ajax(3).then(function() {
        console.log('log', 3);
    }).catch(function(err) {
        console.log('catch', err)
    });
} {
    //所有图片加载完再添加到页面
    function loadImg(src) {
        return new Promise((resolve, reject) => {
            let img = document.createElement('img');
            img.src = src;
            img.onload = function() {
                resolve(img);
            };
            img.onerror = function(err) {
                reject(err);
            };
        })
    }

    function showImgs(imgs) {
        imgs.forEach(function(img) {
            document.body.appendChild(img);
        })
    }
    //Promise.all把多个promise实例当作一个promise实例
    Promise.all([
        loadImg('http://i4.buimg.com/567571/df1ef0720bea6832.png'),
        loadImg('http://i4.buimg.com/567751/2b07ee25b08930ba.png'),
        loadImg('http://i4.buimg.com/567751/5eb8190d6b2a1c9c.png')
    ]).then(showImgs)
} {
    //有一个图片加载完就添加到页面
    function loadImg(src) {
        return new Promise((resolve, reject) => {
            let img = document.createElement('img');
            img.src = src;
            img.onload = function() {
                resolve(img);
            };
            img.onerror = function(err) {
                reject(err);
            };
        })
    }

    function showImgs(img) {
        let p = document.createElement('p');
        p.appendChild(img);
        document.body.appendChild(p);
    }
    //Promise.race 多个实例中 有个一状态率先改变，race就执行
    Promise.race([
        loadImg('http://i4.buimg.com/567571/df1ef0720bea6832.png'),
        loadImg('http://i4.buimg.com/567751/2b07ee25b08930ba.png'),
        loadImg('http://i4.buimg.com/567751/5eb8190d6b2a1c9c.png')
    ]).then(showImgs)
}