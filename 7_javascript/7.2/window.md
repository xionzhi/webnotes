# window 对象

## alert()

- 弹出一个提示

```js
window.alert(1);
```

## confirm()

- 提出一个问题，等待用户抉择 是或者不是

```js
var r = window.confirm('年龄大于18？');
console.log(r);
// true flase
```

## prompt()

- 提出一个问题 等待用户提交

```js
var name = window.prompt('what is your name?');
console.log(name);
```

## setTimeout

- 定时触发一个函数事件

```js
window.setTimeout(function() {
    alert('2秒触发');
}, 2000);
```

## setInterval

- 每隔一段时间 执行一个函数方法

```js
window.setInterval(function() {
    console.log("123");
}, 500);
```

## clearInterval

- 停止一个定时器

```js
var count = 1;
var timer = window.setInterval(function() {
    if(count >= 3)
        clearInterval(timer);
    console.log(count + 'hello');
    count++;
}, 500);
```

### 时间定时器 所在的事件 处于队列 会后与语句执行

```js
window.setTimeout(function() {
     alert('ok');
 }, 0);
console.log('fuck');
// fuck
// ok
```