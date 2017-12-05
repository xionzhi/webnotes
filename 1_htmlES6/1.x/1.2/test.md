# Javascript ES6 字符串 笔记

## string

- 判断开头 结尾

```js
console.log('xionzhi'.indexOf('o') !== -1);  // es5
console.log('xionzhi'.includes('n'));  // es6 开头

console.log('xionzhi'.endsWith('o'));  // es6 结尾
```

- 判断 字符串是否包含

```js
console.log('xionzhi'.startsWith('x'));
```

- 重复输出一个字符串

```js
console.log('hello '.repeat(3));
```

- 关于字符串长度

```js
// 字符串长度 计算 es5
var len = 'zhi'.length;
console.log(len);

//  es6 字符串长度计算
let { length } = 'xionzhi';
console.log(length);
```

- 字符串非配至数组

```js
let [a, b, c] = 'xionzhi'
console.log('a:', a, 'b:', b, 'c:', c); // a:x b:i c:o 只分配单个字符
```

- 函数 数组解构参数

```js
var arr = [1, 2, 3];
function test([a, b]) {
    console.log('a:', a);
    console.log('b:', b);
}
test(arr);  // a:1 b:2
```

```js
var obj = { a: 3, b: 4 };
// 在不存在 a 时 设定a的默认值为 10
function objtest({ b, a = 10 }) {
    console.log('a:', a);
    console.log('b:', b);
}
objtest(obj);  //// a:3 b:4
```

- Item 1
    - Nested Item 1
    - Nested Item 2
    - A misaligned item
