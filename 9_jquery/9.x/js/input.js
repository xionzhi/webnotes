$(function () {
    'use strict';

    window.Input = function (selector) {
        var $ele
            , $error_ele
            , me = this
            , rule =
                {
                    required: true
                };

        this.load_validator = function () {
            var val = this.get_val();
            this.validator = new Validator(val, rule);
        }

        this.get_val = function () {
            return $ele.val();
        }

        function init() {
            find_ele();
            get_error_ele();
            parse_rule();
            me.load_validator();
            listen();
        }

        function listen() {
            // blur || change || keyup
            $ele.on('blur', function () {
                var valid = me.validator.is_valid(me.get_val());
                if (valid)
                    $error_ele.hide();
                else
                    $error_ele.show();
            });
        }

        function get_error_ele() {
            $error_ele = $(get_error_selector());
        }

        // 寻找当前 input 的 错误提示框
        function get_error_selector() {
            return '#' + $ele.attr('name') + '-input-error';
        }

        function find_ele() {
            // 判断 传入的参数是否是jquery对象 
            if (selector instanceof jQuery) {
                // 如果是jq 则直接使用
                $ele = selector;
            } else {
                // 不是则要 自行选择 转换
                $ele = $(selector);
            }
        }

        function parse_rule() {
            var rule_str = $ele.data('rule');
            if (!rule_str) return;

            var rule_arr = rule_str.split('|');
            // ['min:18', 'max:100', 'maxlength:18', ···]
            rule_arr.forEach(function (item_str) {
                var item_arr = item_str.split(':');
                // ['min', '18'] ['max', '100']
                rule[item_arr[0]] = JSON.parse(item_arr[1]);
                // {min: 18} {max: 100}
            });
        }

        init();
    }
})


// $(function () {
//     'use strict';

//     window.Input = function (selector) {
//         var $ele
//             , $error_ele
//             , me = this
//             , rule = {
//                 required: true
//             };

//         this.load_validator = function () {
//             var val = this.get_val();
//             this.validator = new Validator(val, rule);
//         }

//         this.get_val = function () {
//             return $ele.val();
//         }

//         function init() {
//             find_ele();
//             get_error_ele();
//             parse_rule();
//             me.load_validator();
//             listen();
//         }

//         function listen() {
//             // blur || change || keyup
//             $ele.on('change', function () {
//                 var valid = me.validator.is_valid(me.get_val());
//                 if (valid)
//                     $error_ele.hide();
//                 else
//                     $error_ele.show();
//             });
//         }

//         function get_error_ele() {
//             $error_ele = $(get_error_selector());
//         }

//         // 寻找当前 input 的 错误提示框
//         function get_error_selector() {
//             return '#' + $ele.attr('name') + '-input-error';
//         }

//         function find_ele() {
//             // 判断 传入的参数是否是jquery对象 
//             if (selector instanceof jQuery) {
//                 // 如果是jq 则直接使用
//                 $ele = selector;
//             } else {
//                 // 不是则要 自行选择 转换
//                 $ele = $(selector);
//             }
//         }

//         function parse_rule() {
//             var rule_str = $ele.data('rule');
//             if (!rule_str) return;

//             var rule_arr = rule_str.split('|');
//             // ['min:18', 'max:100', 'maxlength:18', ···]
//             rule_arr.forEach(function (item_str) {
//                 var item_arr = item_str.split(':');
//                 // ['min', '18'] ['max', '100']
//                 rule[item_arr[0]] = JSON.parse(item_arr[1]);
//                 // {min: 18} {max: 100}
//             });
//         }

//         // function parse_rule() {
//         //     var i;
//         //     var rule_str = $ele.data('rule');
//         //     if (!rule_str) return;

//         //     var rule_arr = rule_str.split('|');
//         //     for (i = 0; i < rule_arr.length; i++) {
//         //         var item_str = rule_arr[i];
//         //         var item_arr = item_str.split(':');
//         //         rule[item_arr[0]] = JSON.parse(item_arr[1]);
//         //     }
//         // }

//         init();
//     }
// });