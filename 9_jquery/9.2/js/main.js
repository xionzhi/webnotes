// $('div')
// .find('.child')
// .css('border', '1px solid #000');

// 子孙 选择
$('.grandpa')
    .find('.child')
    .css('border', '1px solid #000');

// 父辈 选择
$('#child1')
    // 向上一级
    .parent()
    .css('border', '2px solid #ff0000');

// 祖先 选择
$('#child1')
    // 一直向根节点寻找 所有
    .parents('.grandpa')
    .css('border', '2px solid #00ff00');

// 同级 兄弟 选择
$('.child')
    .filter('.not-gay')
    // #8A2BE2
    .css('background', 'Purple')