```html
<div id="app">
        <div v-if="role == 'admin'">
            <h1>admin</h1>
        </div>
        <div v-else-if="role == 'hr'">
            <h1>hr</h1>
        </div>
        <div v-else>
            <h1>user</h1>
        </div>
    </div>
```

```js
var app = new Vue({
    el: '#app',
    data: {
        role: "hra"
    }
})
```