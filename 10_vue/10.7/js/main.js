var app = new Vue({
    el: '#app',
    data: {
        lang: 90,
        math: 80,
        eng: 30,
    },
    computed: {
        sum: function () {
            return parseFloat(this.lang) + parseFloat(this.math) + parseFloat(this.eng);
        },
        average: function () {
            return Math.round(this.sum / 3);
        }
    },
});