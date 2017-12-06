# 异步加载请求

```js
var trigger = $('#trigger');
var card = $('#card');
var loaded = false;

trigger.on('click', function () {
    // 1.0
    // if(card.is(':visible'))
    //     card.hide();
    // else
    //     card.show();
    // card.toggle();

    // 2.0
    // card.load('add.html');
    // card.toggle();

    // 3.0
    if (card.is(':visible')) {
        card.slideUp();
    }
    else {
        if (!loaded) {
            card.load('add.html');
            loaded = true;
        }
        card.slideDown();
    }
});
```