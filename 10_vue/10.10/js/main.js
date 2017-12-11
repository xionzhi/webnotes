Vue.component('user', {
    template: `
    <a :href="'/user/' + userid">{{ username }}</a>
    `,
    props: ['username', 'userid'],
    methods: {}
});

new Vue({
    el: '#app',
})