const promise = Promise.reject(new Error('Error!'));
promise.catch((err) => {
  console.error(err.message);
});
module.exports = promise;
