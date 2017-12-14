# v-bind

```html
<div id="app">
        <ul v-for="url in weburl">
            <li>
                <a v-bind:href="url.url">{{ url.name }}</a>
            </li>
            <li>
                <img v-bind:src="url.imgsrc" alt="">
            </li>
            <li v-bind:class="{active: url.isActive}">
                hongse
            </li>
        </ul>
        <!-- 可以省略v-bind 直接 :
        <p :class="{active: isActive}">qweqweqwe</p> -->
    </div>
    ```