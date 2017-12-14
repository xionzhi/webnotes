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
    },
    {
        path: '/user',
        components: {
            sidebar: {
                template: `
                <div><h1>用户管理</h1><ul><li>用户列表</li><li>权限管理</li></ul></div>
                `,
            },
            content: {
                template: `
                <div><h1>llakhhkljajhkladsfjhkldfjhkldasfjhklaksdfjhl</h1></div>
                `,
            }
        }
    },
    {
        path: '/post',
        components: {
            sidebar: {
                template: `
                <div><h1>文章管理</h1><ul><li>文章列表</li><li>标签管理</li></ul></div>
                `,
            },
            content: {
                template: `
                <div><h1>llakhhkljajhkladsfjhkldfjhkldasfjhklaksdfjhl</h1></div>
                `,
            }
        }
    },
    // {
    //     //  username 路由参数
    //     //  age 请求参数
    //     path: '/user/:username',
    //     name: 'user',
    //     component: {
    //         // <router-link to="more" append>more</router-link>
    //         // <router-link :to="'/user/' + $route.params.username + '/more'">more</router-link>
    //         template: `
    //         <div>
    //             <p>my name is: {{ $route.params.username }}</p>
    //             <p v-if="$route.query.age">my age is: {{ $route.query.age }}</p>
    //             <router-link to="more" append>more</router-link>
    //             <router-view></router-view>
    //         </div>
    //         `,
    //     },
    //     children: [
    //         {
    //             path: 'more',
    //             component: {
    //                 template: `
    //                 <div><h1>user {{ $route.params.username }} more</h1>
    //                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quisquam iure corporis officiis nihil consequatur quibusdam saepe mollitia itaque autem aperiam eum vitae quo, laudantium nam explicabo voluptatem eaque vero!</p>
    //                 </div>
    //                 `,
    //             }
    //         }
    //     ],
    // }
];

var router = new VueRouter({
    routes: routes,
});

var app = new Vue({
    el: '#app',
    router: router,
    methods: {
        surf: function () {
            setTimeout(function () {
                this.router.push('/about');
                setTimeout(function () {
                    // name 为指定路由的名称
                    this.router.push({
                        name: 'user',
                        params: {
                            username: 'dabaobei',
                        }
                    });
                }, 500);
            }, 500);
        },
    },
    data: {},
})