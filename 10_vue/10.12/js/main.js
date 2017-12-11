/*
    详细说明见 官方文档
    https://cn.vuejs.org/v2/api/index.html
*/
var Event = new Vue();

Vue.component('mm', {
    template: `
    <div>mm说: <input @keyup="on_change" v-model="mm_said"/> {{ mm_said }}  <hr /></div>
    `,
    methods: {
        on_change: function () {
            // 将 mm 说的储存至   Event mm-said-something
            Event.$emit('mm-said-something', this.mm_said)
        }
    },
    data: function () {
        return {
            mm_said: '',
        }
    }
});

Vue.component('gg', {
    template:`
    <div>gg说: {{ gg_said }} </div>
    `,
    data: function () {
        return {
            gg_said: '',
        }
    },
    // 从 Event 中得到mm 说的
    mounted: function () {
        console.log('this1:', this);
        var mms = this;
        Event.$on('mm-said-something', function (data) {
            console.log('this2:', this);
            console.log('data:', data);
            mms.gg_said = data;
        })
    }
});

new Vue({
    el: '#app',
});

