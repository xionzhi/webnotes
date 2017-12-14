```js
var app = new Vue({
    el: '#app',
    data: {
        lang: 90,
        math: 80,
        eng: 30,
    },
    computed: {
        sum: function () {
            return parseFloat(this.lang) + parseFloat(this.math) + parseFloat(this.eng);
        },
        average: function () {
            return Math.round(this.sum / 3);
        }
    },
});
```

```html
<div id="app">
        <table border="1">
            <thead>
                <tr>
                    <th>学科</th>
                    <th>成绩</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>语文</td>
                    <td><input type="text" v-model.number="lang"></td>
                </tr>
                <tr>
                    <td>数学</td>
                    <td><input type="text" v-model.number="math"></td>
                </tr>
                <tr>
                    <td>英语</td>
                    <td><input type="text" v-model.number="eng"></td>
                </tr>
                <tr>
                    <td>总分</td>
                    <td>{{ sum }}</td>
                </tr>
                <tr>
                    <td>平均分</td>
                    <td>{{ average }}</td>
                </tr>
            </tbody>
        </table>
    </div>
```