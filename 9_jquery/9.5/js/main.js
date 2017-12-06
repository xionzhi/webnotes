// 事件一览表 https://developer.mozilla.org/zh-CN/docs/web/events

var card = $('#card');
var cardTrigger = $('#card-trigger');

// 单击显示隐藏
cardTrigger.on('click', function () {
    if (card.is(':visible'))
        card.hide();
    else
        card.show();
});
// 简写
cardTrigger.click(function() {
    if (card.is(':visible'))
    card.hide();
else
    card.show();
});

//  双击 动画显示隐藏
cardTrigger.on('dblclick', function () {
    if (card.is(':visible'))
        card.slideUp();
    else
        card.slideDown();
});


// 鼠标移入移出 事件
card.on('mouseenter', function () {
    card.addClass('active');
});
card.on('mouseleave', function () {
    card.removeClass('active');
});