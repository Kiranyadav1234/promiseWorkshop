const es6promise = require('es6-promise');

'use strict';

const promiseFunc = () => new Promise((fulfill, reject) => {
  setTimeout(() => {
    fulfill('FULFILLED!');
  }, 1900);
});
/* promiseFunc().then((data) => {
  console.log(data);
}); */
module.exports = promiseFunc;
/* promise.then((value)=>{
    console.log(value);

}) */
