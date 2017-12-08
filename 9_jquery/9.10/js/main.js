/* 选中页面中所有的input[data-rule] */

/* 解析每个input 中的验证规则 */

/* 获取用户输入的值val() 进行规则验证 */

$(function () {
    // var validator = new Validator('Aasd123', {
    //     max: 100,
    //     min: 18,
    //     maxlength: 18,
    //     minlength: 5,
    //     pattern: '^[a-zA-Z0-9]*$'
    // });

    // // 判断值 的大小
    // var result1 = validator.validator_max();
    // var result2 = validator.validator_min();
    // console.log(result1 && result2);

    // // 判断值 的长度
    // var result3 = validator.validator_maxlength();
    // var result4 = validator.validator_minlength();
    // console.log(result3&&result4);

    // // 测试是否为 数字
    // var result4 = validator.validator_numeric();
    // console.log(result4)

    // // 是否为空值 空格
    // var result5 = validatoar.validator_required();
    // console.log(result5)

    // // 检测是否是否 只有字母数字
    // var result6 =validator.validator_pattern()
    // console.log(result6);

    var test = new Input('#test');
    var valid = test.validator.is_valid();
    console.log('valid:', valid);
});

