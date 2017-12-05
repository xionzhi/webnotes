# 伪元素 选择器

```css
p::first-letter {
    font-size: 40px;
}

/* 操作开头 */
.a::before {
    content: "[-_-] ";
    color: gray;
}

/* 操作结尾 */
.a::after {
    content: " [?]";
    color: yellow;
}

/* div标签的第一个p 标签 */
div p:first-child {
    color: greenyellow;
}

/* div标签的最后一个p 标签 */
div p:last-child {
    color: orchid;
}


/* 指定为第几个 钦定 */
div p:nth-child(2) {
    color: #00f7ff;
}
```