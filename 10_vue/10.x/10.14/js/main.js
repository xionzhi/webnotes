Vue.directive('pin', function (el, binding) {
    var pinned = binding.value;
    if(pinned) {
        el.style.position = 'fixed';
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
            pinned: true,
        },
    }
})