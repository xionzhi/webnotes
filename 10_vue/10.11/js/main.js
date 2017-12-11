Vue.component('balance', {
    template: `
        <div>
            <show @show-balance="show_balance"></show>
            <div v-if="show">
                <p>你的余额为:1000 </p>
                <p>show: {{ show }} </p>
            </div>
            <div v-else>
                <p>你没有权限查看 </p>
                <p>show: {{ show }} </p>
            </div>
        </div>
    `,
    methods: {
        show_balance: function(data) {
            this.show = !this.show;
            console.log(data);
        }
    },
    data: function () {
        return {
            show: false,
        }
    },
});

Vue.component('show', {
    template: `
        <button @click="on_click()">显示余额！</button>
    `,
    methods: {
        on_click() {
            this.$emit('show-balance', {
                a: 1,
                b: 2,
            })
        }
    },
});

new Vue({
    el: '#app',
});