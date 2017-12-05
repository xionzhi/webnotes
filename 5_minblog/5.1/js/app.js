var request = require('request');

for (var i = 1; i < 0; i++) {
    console.log(i);
    request('http://zero.imadx.com/', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log('OK'); // 打印google首页
        }
    })
}
