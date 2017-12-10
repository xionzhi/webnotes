var app = new Vue({
    el: '#app',
    data: {
        title: '页面加载于:' + new Date().toLocaleString()
    },
    methods: {
        onClick: function () {
            console.log('click');
        },
        onEnter: function () {
            console.log('mouseenter');
        },
        onLeave: function () { 
            console.log('mouseleave');
        },
        onSubmit1: function(e) {
            e.preventDefault();
            console.log('submit1');
        },
        onSubmit2: function() {
            console.log('submit2');
        },
        onSubmit3: function() {
            console.log('submit3');
        },
        onKeyup: function() {
            console.log('enter');
        }
    }
})