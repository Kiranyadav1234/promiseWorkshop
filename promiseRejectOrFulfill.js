const PromiseRejectOrFulfill = () => new Promise((fulfill, reject) => {
  fulfill('I FIRED');
  reject(new Error('I DID NOT FIRE'));
});
const onRejected = (err) => {
  console.log(err.message);
};
PromiseRejectOrFulfill().then(console.log, onRejected);
module.exports = PromiseRejectOrFulfill;
