# webpack 安装和配置

## 一. webpack 安装

### 1.安装 node 和 npm

* 去node官网下载 https://nodejs.org
* 是什么平台就下载什么平台
* 下一步···下一步
* 检查是否安装成功
    * node -v  查看node 版本
    * npm -v   查看npm 版本

### 2.安装webpack

* 可局部也可以全局安装
    * npm install webpack 局部安装
    * npm i webpack -g    全局安装

### 3.使用webpack

- 文件 a.js

```js
var msg1 = "hello";
var msg2 = "world";
module.exports = {
    hello: msg1,
    world: msg2,
}
```

- 文件 b.js

```js
var hello = require('./a.js').hello;
var world = require('./a.js').world;
console.log(hello + ' ' + world);
```

- 将 a b 文件打包

```bash
# 只需要选择入口文件b.js 打包成bundle.js
> webpack b.js bundle.js
···

# 在html文件中引入bundle.js
> http-server

# 打开127.0.0.1:8080
  hello world
``` 
