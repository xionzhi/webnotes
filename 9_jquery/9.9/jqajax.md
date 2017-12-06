# jquery ajax

## get github user

```js
$.ajax('https://api.github.com/users/zhiing')
    .done(function (data) {
        console.log(data);
    });
```

## 请求github 返回用户信息

```js
var form = $('#search');
var input = $('input#username');
var result = $('#result');
var username;

form.on('submit', function (event) {
    event.preventDefault();
    username = input.val();
    $.ajax('https://api.github.com/users/' + username)
        .done(function (data) {
            var html =
                `<div>用户名：` + data.login +`</div>` +
                `<div>用户介绍：` + (data.bio || '没填') +`</div>`;
            result.html(html);
        });
});
```

## 完整 ajax 请求 post

```js
$.ajax({
    url: '/signup',
    method: 'post',
    data: {
        username: $('#username').val(),
        password: $('#password').val()
    },
    success: function (data) {
        console.log(data.title);
        // ··· xxoo
    },
    error: function () {
        alert('error');
        // ··· log
    }
})
```

# get 请求

```js
$.ajax({
    url: 'https://api.github.com/users/zhiing',
    method: 'get',
    // data: {
    //     username: $('#username').val(),
    //     password: $('#password').val()
    // },
    success: function (data) {
        console.log('Y');
        // ··· xxoo
    },
    error: function () {
        console.log('N');
        // ··· log
    }
})
```

## 简写 缩写

```js
$.post('url', {
    username: 'test',
    password: 'test'
});

// 直接get 请求
$.get('url');

// 返回信息为 json
$.getJson('url');

// 返回 js
$.getScript('url');
```