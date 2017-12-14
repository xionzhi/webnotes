// es6 
import {open} from './base'

// //node
// var base = require('./base');
// var open = base.open;

if (open) {
    console.log('open:', open);
    document.body.innerHTML = `
    <div><h1>Signup</h1><a href="home.html">home</a><div>
    `;
} else {
    console.log('open:', open);
    document.body.innerHTML = `
    <div><h1>Error</h1><a href="home.html">home</a><div>
    `;
}