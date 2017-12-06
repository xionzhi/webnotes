// 可见 设置属性  显性
$('#a')
    .attr('href', 'http://xionzhi.com/');

$('#a')
    .attr('aaa', '4321');

// 删除一个显性属性
var t = $('#a')
    .removeAttr('aaa');

// 浏览器 中对象的属性 隐性
$('#a')
    .prop('href', '//xionzhi.com/');

$('#a')
    .prop('aaa', '4321');

// 获取隐形属性值
var t = $('#a')
    .prop('text');
console.log('t:', t);

// 查看所有 隐性属性
console.log(document.getElementById('a'));