// ES6 赋值 运算

//  调用数据函数 
let { floor, pow } = Math;
let Aa = 1.9
let Bb = 1.1
console.log("floor(Aa):", floor(Aa));
console.log("floor(Bb):", floor(Bb));
console.log("pow(2.3):", pow(2, 3))

// 使用 类数组快速赋值
let [a, b, c, d = 'null'] = [11, 22, 33]
console.log("a:", a);
console.log("b:", b);
console.log("c:", c);
console.log("d:", d);

// 解析 复杂对象
var obj = {
    arr: [
        'Hi',
        {
            name: 'xiao bai',
            age: 3
        }
    ]
}
let { arr: [greet, { name, age }] } = obj
console.log("greet", greet);
console.log("name:", name);
console.log("age:", age);
