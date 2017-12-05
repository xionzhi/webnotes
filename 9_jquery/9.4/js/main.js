// 获取元素内所有文本
var text = $('#a').text();
console.log('text:', text);
$('#a').text('FUCK YOU BITCH')
text: 哇哈哈


// 获取元素内所有内用
var html = $('#a').html();
console.log('html:', html);
$('#a').html('fuuuuuck');
html: <p>哇哈哈</p>


// 在元素最后追加
$('#a').append('<div>append</div>');
在元素最前追加
$('#a').prepend('<div>prepend</div>');

删除元素
$('#a').remove();
$('#a span').remove();