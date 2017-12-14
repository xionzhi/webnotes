```html
<div id="app">
        <ul v-for="food in foodList">
            <li >商品名称：{{ food.name }}</li>
            <li >商品价格：{{ food.price }}</li>
            <li >商品折扣：{{ food.discount }}</li>
            <li >商品折后价：{{ food.price * food.discount }}</li>
        </ul>
    </div>
```

```js
var app = new Vue({
    el: '#app',
    data: {
        foodList:[
            {
                name: '大葱',
                price: 10,
                discount: .8
            },
            {
                name: '白菜',
                price: 5,
                discount: .7
            },
            {
                name: '土豆',
                price: 3,
                discount: .9
            },
        ]
    }
})
```