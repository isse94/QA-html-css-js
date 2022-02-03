

const button = document.getElementById(`button`);  // button
const input = document.getElementById(`input`);    // input 
const output = document.getElementById(`output`);  // div (output)


//ex1)
// read = URL => {
//     axios.get(URL)
//       .then((response) => { //parameter response
//         // output.innerHTML = JSON.stringify(response.data); // into our div
//         console.log(response.data);  // response data
//       }).catch((err) => {
//         console.log(err);
//       })
//   }



// button.onclick = () =>  read(input.value);
//OR 
// button.onclick = function () {
//     read(input.value);
// }


//    fetch('https://reqres.in/api/users?page=2')
//      .then((response) => {
//          if (response.status !== 200) {
//              console.log(`Looks like there was a problem.Status Code: ${ response.status }`);
//              return;
//          }
//      response.json()
//      .then(data => console.log(data));         
//      })
//      .catch(err => console.error(`Fetch Error :-S ${err}`));
   

//ex2)
let id = 2;
read = URL => {
    axios.get(URL)
      .then((response) => { //parameter response
        // output.innerHTML = JSON.stringify(response.data); // into our div
        console.log(response.data);  // response data
      }).catch((err) => {
        console.log(err);
      })
  }



button.onclick = () =>  read(input.value);