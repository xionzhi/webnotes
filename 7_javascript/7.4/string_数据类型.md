# String - 数据类型详解

## String()

### 为什么会有这种类型？

- 因为机器无法理解人类的语言，而我们又需要显示人类的语言。

- "yo"和"mmp"在计算机眼里只是两串不同的字符而已，所以，当我们把一个商品的标题写为"发货地：西安"那就是我们的锅了，因为这个数据应该写在商品属性里，而不是标题上，而机器并不知道这两者的区别。

### 如何定义一段字符串？

- 很简单，用引号包起来就好

```txt
    "yo" 双引号
    'yo' 单引号
    在JS中单双引号没有任何区别 "yo" === 'yo' // true
    `我是个模板字符串，我叫 ${name} ` 使用`（反引号）定义模板字符串，可以传入变量，还可以直接断行
```

### 常用方法

- 获得字符串中的某一个字符

```js
'yo'.charAt(0); // "y" 程序员是从0开始数的
'yo'.charAt(1); // "o"
'yo'[0]; // "y"
```

- 检查一段字符是否包含另一段字符

```js
'花花你好'.includes('花花'); // true
'花花你好'.includes('拴蛋'); // false
```

- 用字符串将字符串分割为数组

```js
'花花→_→拴蛋→_→背背'.split('→_→'); // ["花花", "拴蛋", "背背"]
```

- 连接字符串

```js
'y'.concat('ooo', 'oo', 'o'); // "yoooooo"，依次连接传入的字符，传参数量不限
```

- 截取字符串

```js
var str = '王花花和小熊跳舞跳呀跳呀一二一'; 
str.slice(3, 8); // "和小熊跳舞"，第一个传参为开始索引，第二个传参为结束索引
str.slice(3); // "和小熊跳舞跳呀跳呀一二一"，若省略第二个传参将会截取至最后一个字符
```

- .trim 移除两头的空格

```js
'  yo  '.trim(); // "yo"
'  yo'.trim(); // "yo"
```

### 注意

- 不加引号的字符会被JS认为是变量，所以字符串一定是加引号的

```js
var greet = yo;  // ReferenceError（引用错误） 变量yo没有定义
```

- 单双引号定义的字符串不可直接断行，断行可以需使用加号连接

```js
'他好
我也好' // SyntaxError（语法错误）
// -----------------------
'他好' +
'我也好' // '他好我也好'
```

- 字符串与数字运算时需要格外小心

```js
'1' + 1 // "11" 坑
1 + "1" // 2
1 + "1" // 2
2 * "2" // 4 (O_o)???
"2" * 2  // 4 (O_o)???
```