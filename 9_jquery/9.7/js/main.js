// 获取input 的值
var t = $('#a').val();
console.log(t); // hello

// 更改input 的值
$('#a').val('fuck');

// 获得焦点
$('#a').focus();

// 当input 激活时触发 监听功能
$('#a').focus(function () {
    console.log('1');
});

// 全选状态
$('#a').select();

// 不激活输入框
$('#a').blur();


// 触发 submit 登陆提交 获取表单
$('#login-trigger')
    .click(function() {
        userne = $('#userne').val();
        passwd = $('#passwd').val();
        alert(userne + ' ' + passwd);
        $('#login').submit();
    });