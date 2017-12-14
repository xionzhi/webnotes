var routes = [
    {
        path: '/',
        component: {
            template: `
            <div><h1>Home</h1></div>
            `,
        },
    },
    {
        path: '/about',
        component: {
            template: `
            <div><h1>About</h1></div>
            `,
        },
    }
];

var router = new VueRouter({
    routes: routes,
});

var app = new Vue({
    el: '#app',
    router: router,
    data: {},
})