/*eslint no-undef: "error"*/
/*eslint-env browser*/

import '@babel/polyfill';
import './styles.scss';
import c from './component.js';

console.log(c);
let a = 1;
let b = 2;
[a, b] = [b, a];
console.log(a);
console.log(b);
const root = document.createElement('div');
root.innerHTML = `<p>Hello Webpack!</p>`;
document.body.appendChild(root);
