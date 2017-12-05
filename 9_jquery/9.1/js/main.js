// id 选择器
document
    .getElementById("a")
    .style
    .background = 'blue';

 $('#b')
    .css('background', 'red');

// 元素 选择器
$('div')
    .css('color', 'blue');

// 类 选择器
$('.b')
    .css('background', 'pink');

// 后代 选择器
$('#a p')
    .css('border', '2px solid black');

// 属性 选择器
$('input[type="number"]')
    .css('background', 'pink');

// 伪类 选择器
$('div:first')
    .css('border', '2px solid blue');