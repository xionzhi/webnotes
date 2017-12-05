# Number - 数据类型详解

```js
整数（整型）
    如：1，-1
    怎么判断一个值是否为整型？
        Number.isInteger(1) // true
        Number.isInteger(1.1) // false
    其他类型怎么转整型？
        parseInt('1') // 1
        parseInt('1.1') // 1
        parseInt('1.9') // 1
        parseInt('1a') // 1
        parseInt('a1') // NaN
        parseInt('.9') // NaN
        parseInt('0.9') // 0
    真假倾向：只有0为false其他均为true
        !!0 // false
        !!1 // true
        !!0.1 // true
        !!-1 // true
小数（浮点数）
    如：0.1，1.1，.1 如果小于1，小数点前的0可以省略
    其他类型转浮点数
    parseFloat('1') // 1
    parseFloat('1.0') // 1
    parseFloat('1.1') // 1.1
    parseFloat('1.1a') // 1.1
    parseFloat('a1.1') // NaN
    parseFloat('.1') // 0.1
NaN
    一枚奇葩的'Number'类型
    NaN 不是一个数（Not a Number）
    对，它不是一个数，然后它还是种数字类型。(O_o)???
    一般在出错或不可预料的结果中出现，如：'a' * 'b'，0 / 0
    NaN === NaN // false 永不相等
    判断是否为NaN可以使用isNaN()函数
        isNaN(1) // false
        isNaN(0 / 0) // true
```
