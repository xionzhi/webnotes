```html
<div id="app">
        <a href="#" :title="title">title</a>
        <button v-on="{mouseenter: onEnter, mouseleave: onLeave}" v-on:click="onClick">button</button>
        
        <form v-on:submit="onSubmit1($event)">
            <input type="text" name="" id="">
            <input type="submit" value="submit">
        </form>
        <form v-on:keyup.enter="onKeyup" v-on:submit.prevent="onSubmit2">
            <input type="text" name="" id="">
            <input type="submit" value="submit">
        </form>
        <form v-on:submit.stop="onSubmit3">
            <input type="text" name="" id="">
            <input type="submit" value="submit">
        </form>

        <!-- <form @:keyup.enter="onKeyup" @:submit.prevent="onSubmit2">
            <input type="text" name="" id="">
            <input type="submit" value="submit">
        </form> -->

    </div>
```