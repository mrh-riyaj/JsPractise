// Callback function
const paymentSuccess = true;
const marks = 80;
const enroll = (callback) => {
     console.log('Course enrollment is in progress.');

     setTimeout(() => {
          if(paymentSuccess) {
               callback();
          }
          else {
               console.log('Payment failed!');
          }
     }, 2000);
}
const progress = (callback) => {
     console.log('Course on progress...');
     setTimeout(() => {
          if(marks >= 80) {
               callback();
          }
          else {
               console.log('You could not enough mark to get the certificate');
          }
     }, 3000);
}
const getCertificate = () => {
     console.log('Preparing your certificate');
     setTimeout(() => {
          console.log('Congrats! You got the certificate');
     }, 1000);
}
// enroll(() => {
//      progress(getCertificate);
// });


// Callback Function Normal example
const output = (e) => {
     console.log(e);
}
const calculator = (p1, p2, callback) => {
     let sum = p1 + " " + p2;
     if(callback) {
          callback(sum);
     }
     else {
          console.log("You can display result");
     }
}

// calculator("Jon", "Doe", output);