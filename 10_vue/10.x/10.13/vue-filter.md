# filter 过滤器

```js
// filter 主要作用 是对数据显示做出一定的修饰

Vue.filter('meter', function (val, unit) {
    val = val || 0;
    unit = unit || 'm';
    return (val / 1000).toFixed(3) + unit;
    // .toFixed(3) 取得小数点后 3 位
});

Vue.filter('currency', function (val, unit) {
    // 此时的 val 为前端传输的 price
    // unit 为过滤器 传输的第二个参数 currency('USD')
    val = val || 0;
    unit = unit || '元';
    return val + unit;
});

var app = new Vue({
    el: '#app',
    data: {
        price: 100,
        length: 10,
    }
});
```

```html
    <div id="app">
        <div>
            <input type="text" v-model="price"><br>
            {{ price | currency('USD') }}
        </div>
        <hr>
        <div>
            <input type="text" v-model="length"> mm <br>
            {{ length | meter }}
        </div>
    </div>
```