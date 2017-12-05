// ES6 字符串


// es5 以及以前 判断一个字符串中是否存在另一个字符串
console.log('xionzhi'.indexOf('o') !== -1);


// es6 使用 includes
console.log('xionzhi'.includes('n'));
console.log('xionzhi'.includes('aaa'));


// es6 判断是否以某个字符串开头  结束
console.log('xionzhi'.startsWith('x'));
console.log('xionzhi'.endsWith('o'));


// es6 重复一个字符串 n 次
console.log('hello '.repeat(3));


// 字符串长度 计算 es5
var len = 'zhi'.length;
console.log(len);

//  es6 字符串长度计算
let { length } = 'xionzhi';
console.log(length);

// 字符串非配至数组
let [a, b, c] = 'xionzhi'
console.log('a:', a, 'b:', b, 'c:', c); // a:x b:i c:o 只分配单个字符

// 函数 数组解构参数
var arr = [1, 2, 3];
function test([a, b]) {
    console.log('a:', a);
    console.log('b:', b);
}
test(arr);  // a:1 b:2  

var obj = { a: 3, b: 4 };
// 在不存在 a 时 设定a的默认值为 10
function objtest({ b, a = 10 }) {
    console.log('a:', a);
    console.log('b:', b);
}
objtest(obj);  //// a:3 b:4
