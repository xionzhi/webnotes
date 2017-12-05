var arr = [1, 2, 3, 3, 3];

var sett1 = new Set(arr);

var sett2 = new Set([1, 2, 3, 3, 7]);

// set.size ===== arr.length
console.log(sett1); // 1 2 3
console.log(sett2); // 1 2 3 7

// 检查长度
sett2.size

// 增加一个值
sett2.add(4);

// 删除一个值
sett2.delete(4);

// 检查是否 拥有一个值
sett2.has(5);

// 清空这个 set
sett2.clear();