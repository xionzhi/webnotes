var alert_component = {
    template: `
    <button :class="{ liked: liked }" @click="toggle_like"> 
    {{ like_str }} {{ like_count }}</button>
    `,
    data: function () {
        return {
            like_count: 10,
            liked: false,
            like_str: '点赞'
        }
    },
    methods: {
        toggle_like: function () {
            if (!this.liked) {
                this.like_count++;
                this.like_str = '取消点赞'
            }
            else {
                this.like_count--;
                this.like_str = '点赞'
            }
            this.liked = !this.liked;
        }
    }
};

new Vue({
    el: '#app',
    components: {
        like: alert_component
    }
});