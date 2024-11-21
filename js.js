
// Ascending 0123... Descending 987654...
// For display
const display = (x) => {
     console.log(x);
}

// Object
const human = {
     firstName: "Jon",
     lastName: "doe",
     age: 30,
     fullName: function () {
          return this.firstName + " " + this.lastName;
     }
};
// display(human.fullName())

const textSlice = () => {
     let fullName = "Md-Riyaj-Hossain";
     let myName = fullName.slice(3, 8);
     display(myName)
}
// textSlice()

// let in text
const letInString = () => {
     let country = "Bangladesh";
     let number = 18;
     display(`I love ${country} and it's population ${number} crore`);
}
// letInString()

// upperCase And lowerCase
const upperCase = (e) => {
     let text = document.getElementById("upper-case");
     if(e == "upperCase") {
          let upperText = text.innerHTML.toUpperCase();
          display(upperText)
          let newText =  upperText.replace("LOWER", "UPPER");
          text.innerHTML = newText;
     } else if(e == "lowerCase") {
          let lowerText = text.innerHTML.toLowerCase();
          let newText =  lowerText.replace("upper", "lower");
          text.innerHTML = newText;
     }
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


// Random numbers
const points = [40, 100, 1, 5, 25, 10];
document.getElementById("random").innerHTML = points;
function random() {
     for (let i = points.length -1; i > 0; i--) {
          let j = Math.floor(Math.random() * ( i + 1));
          let k = points[i];
          points[i] = points[j];
          points[j] = k;
     }
     document.getElementById("random").innerHTML = points;
}
// Random numbers
function getRndInteger(min, max) {
     return Math.floor(Math.random() * (max - min) ) + min;
}
// display(getRndInteger(1, 10))

const riversPrint = () => {
     let myArray = [];
     let n = 10;
     for(i = 0; i < n; i++) {
          myArray[i] = i + 1;
     }
     for(i = n; i >= 0; i--) {
          let number = myArray[i] % 2;
          if(number == 0) {
               display(myArray[i]);
          }
     }
}
// riversPrint()

const evenOdd = () => {
     let myArray = [];
     let n = 10;
     for(let i = 0; i < n; i++) {
          myArray[i] = i + 1;
     }
     for(let i = 0; i < 10; i++) {
          let number = myArray[i] % 2;
          if(number == 0) {
               display(myArray[i] + " Even Number");
          } else {
               display(myArray[i] + " Odd Number");
          };
     };
}
// evenOdd();


const printing = (x, y) => {
     let Ar = [];
     for(i = 0; i < x; i++) {
          Ar[i] = i + 1;
          let EO = Ar[i] % 2;
          if(y === undefined) {
               let all = Ar[i];
               display(all)
          } 
          else if(y === "E" || y === "O" || y === "e" || y === "o") {
               if(y === "E" || y === "e" && EO == 0) {
                    let odd = Ar[i];
                    display(odd)
               } 
               else if(y === "O" || y === "o" && EO != 0) {
                    let even = Ar[i];
                    display(even)
               }
          }
          else {
               display('Other text not alow just "E" or "O"')
          };
     };
     // display(Ar, Ar.length)
};
// printing(numbers, whatYouWant);
// printing(11, "E");


let salary = [120, 100, 500, 800, 50, 580, 50];
const bonus = (salary, percent = 10) => {
     const newArray = [];
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

let bonusAdded = bonus(salary, 55);
// display(bonusAdded)



const numbers = [1, 2, 3, 4, 3, 2, 6, 7, 8, 9, 10, 9, 10];
const uniqNumbers = numbers.filter((value, index, array) => {
     return array.indexOf(value) === index;
});
// display(uniqNumbers)


// Create a Map
const fruits = new Map([
     ["apples", 500],
     ["bananas", 300],
     ["oranges", 200]
]);
fruits.forEach(function(value, key) {
     display(key)
     display(value)
});
