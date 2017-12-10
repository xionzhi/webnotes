$(function () {
    'use strict';
  
    window.Validator = function (val, rule) {
  
      /*
      {
        max: 10,
        min: 2
      }
      */
      this.is_valid = function (new_val) {
        var key;
        if (new_val !== undefined)
          val = new_val;
  
        /*如果不是必填项且用户未填写任何内容则直接判定为合法*/
        if (!rule.required && !val)
          return true;
  
        for (key in rule) {
          /*防止重复检查*/
          if (key === 'required')
            continue;
  
          /*调用rule中相对应的方法*/
          var r = this['validate_' + key]();
          if (!r) return false;
        }
  
        return true;
      }
  
      this.validate_max = function () {
        pre_max_min();
        return val <= rule.max;
      }
  
      this.validate_min = function () {
        pre_max_min();
        return val >= rule.min;
      }
  
      this.validate_maxlength = function () {
        pre_length();
        return val.length <= rule.maxlength;
      }
  
      this.validate_minlength = function () {
        pre_length();
        return val.length >= rule.minlength;
      }
  
      this.validate_numeric = function () {
        return $.isNumeric(val);
      }
  
      this.validate_required = function () {
        var real = $.trim(val);
        if (!real && real !== 0) {
          return false;
        }
        return true;
      }
  
      this.validate_pattern = function () {
        var reg = new RegExp(rule.pattern);
        return reg.test(val);
      }
  
      /* 用于完成this.validate_max 或
        this.validate_min的前置工作
      * */
      function pre_max_min() {
        val = parseFloat(val);
      }
  
      /* 用于完成this.validate_maxlength或
        this.validate_minlength的前置工作
      * */
      function pre_length() {
        val = val.toString();
      }
    }
  })

  // $(function () {
//     'use strict';

//     window.Validator = function (val, rule) {

//         /*{
//             max: 100,
//             min: 18
//         }*/
//         this.is_valid = function (new_val) {
//             var key;
//             val = new_val || val;

//             // 如果 值可以为空 直接返回
//             if (!rule.required && !val) {
//                 return true
//             }

//             for (key in rule) {
//                 // 防止重复检测
//                 if (key === 'required') {
//                     continue;
//                 }
//                 // validator_max 拼接需要去验证的方法
//                 // 调用 rule 中相对应的方法
//                 var r = this['validator_' + key]();
//                 // 如果有任何一条不通过 则 终止全部验证 
//                 if (!r) return false;
//             }
//             //  验证全部通过
//             return true;
//         }

//         // 验证  最大 值
//         this.validator_max = function () {
//             val = pre_max_min(val);
//             return val <= rule.max;
//         }

//         // 验证  最小 值
//         this.validator_min = function () {
//             val = pre_max_min(val);
//             return val >= rule.min;
//         }

//         // this.validator_max 或 this.validator_min 的前置工作
//         function pre_max_min(val) {
//             val = parseFloat(val);
//             return val;
//         }

//         // 验证 最大 长度
//         this.validator_maxlength = function () {
//             val = pre_length(val);
//             return val.length <= rule.maxlength;
//         }

//         // 验证 最小 长度
//         this.validator_minlength = function () {
//             val = pre_length(val);
//             return val.length >= rule.minlength;
//         }

//         // this.validator_maxlength 或 this.validator_minlength 的前置工作
//         function pre_length(val) {
//             val = val.toString();
//             return val;
//         }

//         // 验证 是否为 数字
//         this.validator_numeric = function () {
//             return $.isNumeric(val);
//         }

//         // 验证是否 为空值
//         this.validator_required = function () {
//             var real = $.trim(val) // 去除两端空格
//             if (!real && real !== 0) {
//                 return false;
//             }

//             return true;
//         }

//         // 验证 只能有字母或者数字
//         this.validator_pattern = function () {
//             var reg = RegExp(rule.pattern);
//             return reg.test(val);
//         }
//     }
// });


  