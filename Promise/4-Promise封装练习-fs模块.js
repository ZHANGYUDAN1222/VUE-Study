const { rejects } = require('assert');
const { fstat } = require('fs');

/* 
* 封装一个函数 mineReadFile 读取文件内容
* 参数： path 文件
* 返回： promise 对象
*/
function mineReadFile(path){
    return new Promise((resolve, reject) => {
        // 读取文件
        require('fs').readFile(path, (err, data) => {
            // 判断
            if(err) reject(err);
            resolve(data);
        });
    });
}

mineReadFile('./resource/content.txt')
.then(value => {
    console.log(value.toString());
}, reason =>{
    console.log(reason);
});