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
        path: '/login',
        component: {
            template: `
            <div><h1>Login</h1></div>
            `,
        },
    },
    {
        path: '/admin',
        meta: { login_required: true },
        component: {
            template: `
            <div><h1>User</h1>
            <router-link to="more" append>more</router-link>
            <router-view></router-view>
            </div>
            `,
        },
        children: [
            {
                path: 'more',
                component: {
                    template: `
                    <div><h2>查看用户权限</h2></div>
                    `,
                }
            },
        ],
    },
    {
        path: '/aaa',
        meta: { login_required: true },
        component: {
            template: `
            <div><h1>Login</h1></div>
            `,
        },
    },
];

var router = new VueRouter({
    routes: routes,
});

// 访问之前 执行判断
router.beforeEach(function (to, from, next) {
    var logged_in = false;

    if (!logged_in && to.matched.some(function (item) { return item.meta.login_required; }))
        next('/login')
    else {
        next();
    }
});

// 访问之后执行
router.afterEach(function (to, from) {
    // console.log('to:', to);
    // console.log('from:', from);
});

var app = new Vue({
    el: '#app',
    router: router,
    data: {},
})