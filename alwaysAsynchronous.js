const promise = () => new Promise((fulfill, reject) => {
  fulfill('PROMISE VALUE');
  console.log('MAIN PROGRAM');
});
promise().then(console.log);
module.exports = promise;
