# 代替全局变量

- 变量出口
```js
var msg1 = "hello";
var msg2 = "world";
var msg3 = "fuck";

// 只暴露 两个变量
module.exports = {
    hello: msg1,
    world: msg2,
}
```

- 变量入口

```js
// 获取a 暴露的两个变量
var hello = require('./a.js').hello;
var world = require('./a.js').world;

console.log(hello + ' ' + world);
```

- 运行结果

```bash
> node b.js

hello world
```