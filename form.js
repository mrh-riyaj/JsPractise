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
     let error = document.getElementById("error");
     let display = document.getElementById("display");

     if(formData[0] == "" && formData[1] == "") {
          error.innerHTML = "All filed has missing!";
     }
     else if(formData[0] == "") {
          error.innerHTML = "Enter your first name";
     }
     else if(formData[1] == "") {
          error.innerHTML = "Enter your last name";
     }
     else {
          error.innerHTML = "";
          document.getElementById("first").value = "";
          document.getElementById("last").value = "";
          for(let i = 0; i <= 0; i++) {
               newData[i] = formData;
               display.innerHTML = `<li>${newData[0] + " " + newData[1]}<li>`;
               console.log(newData)
          }
     }
     // console.log(newData.length)
}
