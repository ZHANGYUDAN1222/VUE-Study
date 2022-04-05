# Promise 笔记

# promise 是JS中进行异步编程的新解决方案 （旧的是回调函数）

# 箭头函数
    hello = function(){
        return 'hello world'
    }
    将变成
    hello = () => {
        return 'hello world'
    }
    最终变成
    hello = () => 'hello world'

# 异步函数：单核运行多线程
    传统异步是回调函数
    '''
    setTimeout(() => {
        console.log('等3秒');

        setTimeout(() => {
            console.log('再等3秒');

            setTimeout(() => {
                console.log('又等3秒');

                //...
            }, 3000);
        }, 3000);
    }, 3000);
    此方法会不断向右延申， 影响阅读性， 此又称为回调地狱
    
    新异步： Promise
    fetch 就是其中的代表
    在 console 输入 ： fetch("https://jsonplaceholder.typicode.com/posts/1")
    会返回一个 Promise 对象， 承诺会在未来某个时刻返回数据， 随后可以用 then 方法来传递一个回调函数

    fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then( () => {} )

    '''

# 回调函数：作为某函数的参数的函数叫做回调函数 例：log1就是回调函数
    '''
    const log1 = () => {
        console.log(1);
    };
    setTimeout(log1, 1000)

    通常写作：log1写成匿名函数
    setTimeout(() => {
            console.log(1);
        }, 1000);
    '''

## 异步编程
* fs 文件操作
    '''
    require('fs').readfile('./index.html', (err, data)=>{})
                                            ^此处用的回调函数
    '''
* 数据库操作
* AJAX
    '''
    $.get('/server', (data)=>{})
                     ^此处回调函数
    '''
* 定时器
    '''
    setTimeout(()=>{}, 2000);
               ^回调函数
    '''