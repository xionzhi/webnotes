
// 增加 多条css 属性
$('.a')
    .css({
        color: 'red',
        background: 'Purple',
        // 'background-color': 'Purple',
        // 'backgroundColor': 'Purple',
        border: '3px solid blue'
    });

// 增加和删除 一个 class
var b = $('.b')
    .addClass('black')
    .removeClass('b');

// 判断是否存在一个 class
console.log(b.hasClass('black'));
console.log(b.hasClass('b'));

// 直接 显示和隐藏
var a = $('.a');
a.hide();
a.show(); 

// 淡入 淡出 时间参数
a.fadeOut(2000);
a.fadeIn(2000);

// 上下出入
a.slideUp(2000);
a.slideDown(2000);


