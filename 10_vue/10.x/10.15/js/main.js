Vue.directive('pin', function (el, binding) {
    // value 属性值
    var pinned = binding.value;
    // modifiers 修饰符
    var position_card = binding.modifiers;
    // arg 
    var warning_card = binding.arg;
    console.log(position_card);
    // position_card.forEach(function (item_key) {
    //     if(position_card[item_key]) {

    //     }
    // });
    if(pinned) {
        el.style.position = 'fixed';
        for (var item_key in position_card) {
            if(position_card[item_key]) {
                el.style[item_key] = '15px';
            }
        }
        if(warning_card == 'card2') {
            el.style.background = 'rgba(255, 0, 0, .1)';
        }else {
            if(warning_card == 'card4') {
                el.style.background = 'rgba(0, 0, 255, .1)';
            }
        }
    }else {
        el.style.position = 'static';
    }
    console.log(pinned);
});

var app = new Vue({
    el: '#app',
    data: {
        card1: {
            pinned: false,
        },
        card2: {
            pinned: false,
        },
        card3: {
            pinned: false,
        },
        card4: {
            pinned: false,
        }
    }
})