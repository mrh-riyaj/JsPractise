// Self calling function
(function Name () {
     let myArray = [];
     let n = 10;
     for(i = 0; i < n; i++) {
          myArray[i] = i + 1;
     }
     for(i = 0; i < 10; i++) {
          let number = myArray[i] % 2;
          if(number == 0) {
               console.log(myArray[i] + " Even Number")
          } else {
               console.log(myArray[i] + " Odd Number")
          };
     };
})();