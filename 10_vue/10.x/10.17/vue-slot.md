# vue slot

```html
<body>
    <div id="app">
        <panel>
            <div slot="title">Program A</div>
            <div slot="content">Program A</div>
            <div slot="footer">Program A</div>
        </panel>
        <panel>
            <div slot="title">Program B</div>
            <div slot="content">Program B</div>
            <!-- <div slot="footer">Program B</div> -->
        </panel>
        <panel></panel>
    </div>

    <template id="panel-tpl">
        <div class="panel">
            <div class="title">
                <slot name="title">
                    Undefined
                </slot>
            </div>
            <div class="content">
                <slot name="content">
                    Undefined
                </slot>
            </div>
            <div class="footer">
                <slot name="footer">
                    Undefined
                </slot>
            </div>
        </div>
    </template>
</body>
```