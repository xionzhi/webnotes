// es6 
import {open} from './base'

// // node
// var base = require('./base');
// var open = base.open;

if (open) {
    console.log('open:', open);
    document.body.innerHTML = `
    <div><h1>Home</h1><a href="signup.html">signup</a><div>
    `;
}else {
    console.log('open:', open);
    document.body.innerHTML = `
    <div><h1>Error</h1><a href="https://xionzhi.com">xionzhi</a><br />
                        <a href="signup.html">signup</a><div>
    `;
}