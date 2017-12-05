# 选择器的权重

- （内联样式） > （id选择器） > （class选择器/属性选择器/伪类选择器） > （属性选择器）

```css
/* 1000 内联样式 */

/* 0100 */
#idb {
    color: orange;
}

/* 0010 */
.b {
    color: red;
}

/* 0001 */
div {
    color: blue;
}
```