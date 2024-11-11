let time = document.getElementById("display-time");
let date = document.getElementById("display-date");

let todaysDate = new Date();
let getDate = todaysDate.getDate();
let getMonth = todaysDate.getMonth() + 1;
let getFullYear = todaysDate.getFullYear();

let getHours = todaysDate.getHours();
let getMinutes = todaysDate.getMinutes();
let getSeconds = todaysDate.getSeconds();

const myFunction = (e) => {
     if(e == "date") {
          date.innerHTML = getDate + " : " + getMonth + " : " + getFullYear;
     }
     else {
          time.innerHTML = getHours - 12 + " : " + getMinutes + " : " + getSeconds;
     }
};

const a = [];
for(let i = 1; i <= 10; i++) {
     i++;
     a.push(i);
};
// console.log(a);

// Object
const human = {
     firstName: "Jon",
     lastName: "doe",
     age: 30,
     fullName: function () {
          return this.firstName + " " + this.lastName;
     }
};
// console.log(human.fullName());

const textSlice = () => {
     let fullName = "Md-Riyaj-Hossain";
     let myName = fullName.slice(3, 8);
     console.log(myName)
}
// textSlice()

const letInString = () => {
     let country = "Bangladesh";
     let number = 18;
     let stringV = `I love ${country} and it's population ${number} crore`;
     console.log(stringV)
}
// letInString()

const Replace = (x, y, z) => {
     let text = document.getElementById(x);
     let newText = text.innerHTML.replace(y, z);
     text.innerHTML = newText;
};

const upperCase = (e) => {
     let text = document.getElementById("upper-case").innerHTML;
     if(e == "upperCase") {
          let upperText = text.toUpperCase();
          let newText =  upperText.replace("LOWER", "UPPER");
          document.getElementById("upper-case").innerHTML = newText;
     } else if(e == "lowerCase") {
          let lowerText = text.toLowerCase();
          let newText =  lowerText.replace("upper", "lower");
          document.getElementById("upper-case").innerHTML = newText;
          console.log(newText);
     } else {
          document.getElementById("upper-case").innerHTML = alert("Wrong");
     };
};

let items = "";
let tags = ["Html, ", "Css, ", "javaScript"];
let tagLength = tags.length;
for (const x of tags) {
     items += `<div>${x}</div>`;
}
// document.getElementById("loop").innerHTML = items;

// Simple Way loop
tags.forEach(e => {
     items = "<div>" + e + "</div>"
     document.getElementById("loop").innerHTML += items;
});

const riversPrint = () => {
     let myArray = [];
     let n = 10;
     for(i = 0; i < n; i++) {
          myArray[i] = i + 1;
     }
     for(i = n; i >= 0; i--) {
          let number = myArray[i] % 2;
          if(number == 0) {
               console.log(myArray[i]);
          }
     }
}
// riversPrint()

const evenOdd = () => {
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
}
// evenOdd()

 // Self calling function
// (function Name () {
//      let myArray = [];
//      let n = 10;
//      for(i = 0; i < n; i++) {
//           myArray[i] = i + 1;
//      }
//      for(i = 0; i < 10; i++) {
//           let number = myArray[i] % 2;
//           if(number == 0) {
//                console.log(myArray[i] + " Even Number")
//           } else {
//                console.log(myArray[i] + " Odd Number")
//           };
//      };
// })();

const printing = (x, y) => {
     let Ar = [];
     for(i = 0; i < x; i++) {
          Ar[i] = i + 1;
          let EO = Ar[i] % 2;
          if(y === undefined) {
               let all = Ar[i];
               console.log(all)
          } 
          else if(y === "E" || y === "O" || y === "e" || y === "o") {
               if(y === "E" || y === "e" && EO == 0) {
                    let odd = Ar[i];
                    console.log(odd)
               } 
               else if(y === "O" || y === "o" && EO != 0) {
                    let even = Ar[i];
                    console.log(even)
               }
          }
          else {
               console.log('Other text not alow just "E" or "O"')
          };
     };
     // console.log(Ar, Ar.length)
};
// printing(numbers, whatYouWant);
// printing(11, "E");

// Ascending 0123... Descending 987654...
// x = [120,100,500,800]
// y = bonus(x, 10)
// y => [132,110,550,880]

let salary = [120, 100, 500, 800, 50, 580, 50];
const bonus = (salary, percent = 10) => {
     let newArray = [];
     if(percent <= 100 && percent > -1) {
          for(i = 0; i < salary.length; i++) {
               salary[i] += salary[i] * percent / 100;
               newArray[i] = salary[i];
          };
     }
     else {
          alert("Something Wrong !");
     }
     return newArray;
}
let bonusAdded = bonus(salary, 100);
console.log(bonusAdded)



