/* 
* util.promisify 方法
* 传入一个常见的错误优先的回调风格的函数（即以 （err, value）=> ...回调作为最后一个参数）， 并返回一个返回promise的版本。
*/
// 引入 util 模块
const util = require('util');
// 引入 fs 模块
const fs = require('fs');
// 返回一个新的函数， 函数的返回结果是 promise 对象
let mineReadFile = util.promisify(fs.readFile);

mineReadFile('./resource/content.txt')
.then(value =>{
    console.log(value.toString());
}, reason => {
    console.log(reason);
});