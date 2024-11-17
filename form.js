// const addNew = () => {
//      const obj = {
//           fName: "",
//           lName: ""
//      }
//      let firstName = document.getElementById("first").value;
//      let lastName = document.getElementById("last").value;
//      let display = document.getElementById("display");

//      if(firstName == "" && lastName == "") {
//           console.log("All filed has missing!");
//      }
//      else if(firstName == "") {
//           console.log("Missing firstName");
//      }
//      else if(lastName == "") {
//           console.log("Missing lastName");
//      }
//      else {
//           obj.fName = firstName;
//           obj.lName = lastName;
//      }
//      display.innerHTML = `<span>${obj.fName} </span><span>${obj.lName}</span>`;
// }

const addNew = () => {
     const formData = [];
     const newData = [];
     formData[0] = document.getElementById("first").value;
     formData[1] = document.getElementById("last").value;
     let display = document.getElementById("display");

     if(formData[0] == "" && formData[1] == "") {
          console.log("All filed has missing!");
     }
     else if(formData[0] == "") {
          console.log("Missing firstName");
     }
     else if(formData[1] == "") {
          console.log("Missing lastName");
     }
     else {
          for(let i = 0; i < formData.length; i++) {
               newData[i] = formData;
          }
     }
     // display.innerHTML = `<span>${newData[]}</span>`
     console.log(newData)
}
