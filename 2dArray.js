// 2dArray
const Names = ["jon", "dow"];
const TwoDArray = [[],[],[]];

for(let i = 0; i < 3; i++) {
     for(let j = 0; j < 3; j++) {
          TwoDArray[i][j] = j;
     }
}
// console.log(TwoDArray);

// Array sort
let sorted = [120, 100, 500, 800, 51, 580, 50];
sorted.sort(function (a, b) {return a - b});
// console.log(sorted);