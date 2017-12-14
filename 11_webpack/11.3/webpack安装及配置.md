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
正常情况下简单程序到这里就可以了,然而实际生产中依赖关系和全局变量等都极为复杂,建议`npm init`再局部安装各种依赖包,然后来需要配置局部webpack

## 二. webpack 配置

### 1.npm init初始化目录

- npm 初始化目录
```bash
> npm init

# 如果配置默认属性加上参数 -y
> npm init -y
```

- 局部安装webpack

```bash
# 这次不加参数-g 加上 -D
# -D 意思为 --save-dev
> npm i webpack -D
```
### 2.使用局部环境下的webpack

- 使用局部webpack

```bash
# 局部位置.\node_modules\.bin\webpack
> ./node_modules/.bin/webpack b.js bundle.js
```

- 将命令写入 `package.json`

```json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "pack": "./node_modules/.bin/webpack b.js bundle.js"
  },
// "pack" 即是自定义命令
```

- 运行自定义命令

```bash
> npm run pack
```

### 3.使用配置文件`webpack.config.js`

- 在当前目录创建文件`webpack.config.js`

```js
module.exports = {
    // entry 设置入口文件 可省略文件后缀
    entry: './b',
    // output 指定出口文件
    output: {
        // 指定出口文件的文件名
        filename: 'bundle.js',
        // path 解释为当前文件所在目录
        path:__dirname
    }
}
```

- 修改文件 `package.json`

```json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "pack": "./node_modules/.bin/webpack"
  },
// "pack" 即是修改的内容
```

- 使用配置文件

```bash
> npm run pack
···
# 再次生成文件 bundle.js
```