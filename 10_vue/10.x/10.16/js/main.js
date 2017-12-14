var base = {
    methods: {
        show: function () {
            this.visible = true;
        },
        hide: function () {
            this.visible = false;
        },
        toggle: function () {
            this.visible= !this.visible;
        },
    },
    data: function () {
        return {
            visible: false,
        }
    }
};

Vue.component('tooltip', {
    template: `
    <div>
        <span @mouseenter="show" @mouseleave="hide">test</span>
        <div v-if="visible">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non quidem nulla reiciendis laborum quibusdam rerum nostrum autem unde recusandae pariatur voluptate, sit explicabo hic culpa eveniet officia numquam. Ipsa, molestias?    
        </div>
    </div>
    `,
    // mixins 可以继承 base 的属性 可在后续中自定义自己的属性
    mixins: [base],
    data: function () {
        return {
            visible: true,
        }
    }
});

Vue.component('popup', {
    template: `
    <div>
        <button @click="toggle">test</button>
        <div v-if="visible">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non quidem nulla reiciendis laborum quibusdam rerum nostrum autem unde recusandae pariatur voluptate, sit explicabo hic culpa eveniet officia numquam. Ipsa, molestias?    
        </div>
    </div>
    `,
    mixins: [base],
});

var app = new Vue({
    el: '#app',
    data: {

    }
})