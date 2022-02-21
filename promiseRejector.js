const rejectPromise = new Promise((fulfill, reject) => {
  setTimeout(() => {
    reject(new Error('Rejected!'));
  }, 2000);
});

const onReject = (error) => {
  console.log(error.message);
};

rejectPromise.then(null, onReject);
module.exports = rejectPromise;
