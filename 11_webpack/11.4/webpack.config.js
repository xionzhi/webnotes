module.exports = {
    entry: {
        home: './js/home.js',
        signup: './js/signup.js',
    },
    output: {
        // [name] 指代表 entry 的键名
        filename: '[name].bundle.js',
        // distributable 可分发的
        path: __dirname + '/dist',
    }
}