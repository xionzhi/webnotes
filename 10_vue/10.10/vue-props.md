# vue-props

## 使用 props 获取自定义属性中的值 加载超链接以及用户名 

```html
<div id="app">
    <div><user username="aaa" userid="1"></user></div>
    <div><user username="bbb" userid="2"></user></div>
    <div><user username="ccc" userid="3"></user></div>
</div>
```

```js
Vue.component('user', {
    template: `
    <a :href="'/user/' + userid">{{ username }}</a>
    `,
    props: ['username', 'userid'],
    methods: {}
});

new Vue({
    el: '#app',
});
```
### 渲染之后 html

```html
<div id="app">
    <div><a href="/user/1">aaa</a></div>
    <div><a href="/user/2">bbb</a></div>
    <div><a href="/user/3">ccc</a></div>
</div>
```