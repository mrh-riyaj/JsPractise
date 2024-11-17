// Promise
const payment = true;
const mark = 79;

const Enroll = () => {
     console.log('Course enrollment is in progress.');

     const promise = new Promise((resolve, reject) => {
          setTimeout(() => {
               if(payment) {
                    resolve();
               }
               else {
                    reject('Payment failed!');
               }
          }, 2000);
     });
     return promise;
}

const Progress = () => {
     console.log('Course on progress...');
     
     const promise = new Promise((resolve, reject) => {
          setTimeout(() => {
               if(mark >= 80) {
                    resolve();
               }
               else {
                    reject('You could not enough mark to get the certificate');
               }
          }, 3000);
     });
     return promise;
}

const GetCertificate = () => {
     console.log('Preparing your certificate');
     const promise = new Promise((resolve) => {
          setTimeout(() => {
               resolve('Congrats! You got the certificate');
          }, 1000);
     });
     return promise;
}

async function course () {
     try {
          await Enroll();
          await Progress();
          const message = await GetCertificate();
          console.log(message)
     } catch(err) {
          console.log(err)
     }
}
// course()

// Another way to print
// Enroll()
//      .then(Progress)
//      .then(GetCertificate)
//      .then((value) => {
//           console.log(value);
//      })
//      .catch((err) => {
//           console.log(err);
//      })